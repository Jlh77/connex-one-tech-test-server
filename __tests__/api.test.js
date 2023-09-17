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
      .get("/time")
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
  test("404 - Missing route", async () => {
    const { body } = await request
      .get("/this-route-does-not-exist")
      .set("Authorization", authToken)
      .expect(404);

    expect(body.message).toBe("Not Found");
  });
});

describe("/metrics endpoint", () => {
  test("404 - Missing route", async () => {
    const { body } = await request
      .get("/this-route-does-not-exist")
      .set("Authorization", authToken)
      .expect(404);

    expect(body.message).toBe("Not Found");
  });
});
