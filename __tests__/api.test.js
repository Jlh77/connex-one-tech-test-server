const moment = require("moment");
const app = require("../dist/server.js");
const request = require("supertest")(app);

const authToken = process.env.SECRET_TOKEN;

describe("403 Forbidden for invalid token", () => {
  test("403 - No Token Supplied", async () => {
    const { body } = await request.get("/time").expect(403);

    expect(body.message).toBe("Forbidden");
  });

  test("403 - Wrong token supplied", async () => {
    const { body } = await request
      .get("/this-route-does-not-exist")
      .set("Authorization", "wrongtoken")
      .expect(403);

    expect(body.message).toBe("Forbidden");
  });
});

describe("404 for invalid routes", () => {
  test("404 - Missing route", async () => {
    const { body } = await request
      .get("/this-route-does-not-exist")
      .set("Authorization", authToken)
      .expect(404);

    expect(body.message).toBe("Not Found");
  });
});

describe("/time endpoint", () => {
  test("returns valid time", async () => {
    const { body } = await request
      .get("/time")
      .set("Authorization", authToken)
      .expect(200);

    expect(body).toEqual({ epoch: expect.any(Number) });

    const dateString = new Date(body.epoch);

    expect(moment(dateString).isValid()).toBe(true);
  });

  test("Check time is within 1 minute of current time", async () => {
    // (should be as on same system, and request shouldn't be more than 1 minute...)
    const { body } = await request
      .get("/time")
      .set("Authorization", authToken)
      .expect(200);

    const { epoch } = body;

    const now = Date.now();
    const minute = 1000 * 60;
    const isWithin1Minute = epoch > now - minute && epoch < now + minute;

    expect(isWithin1Minute).toBe(true);
  });
});

describe("/metrics endpoint", () => {
  test("Receive string", async () => {
    const { text } = await request
      .get("/metrics")
      .set("Authorization", authToken)
      .expect(200);

    expect(text).toEqual(expect.any(String));
  });

  test("Include default metrics", async () => {
    const { text } = await request
      .get("/metrics")
      .set("Authorization", authToken)
      .expect(200);

    const exampleDefaultMetric = "process_cpu_seconds_total";

    expect(text.includes(exampleDefaultMetric)).toBe(true);
  });

  test("Include garbage collection metrics", async () => {
    const { text } = await request
      .get("/metrics")
      .set("Authorization", authToken)
      .expect(200);

    const exampleGarbageCollectionMetric = "nodejs_gc_runs_total";

    expect(text.includes(exampleGarbageCollectionMetric)).toBe(true);
  });
});
