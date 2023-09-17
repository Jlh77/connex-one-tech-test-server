import express from "express";

const { authMiddleware } = require("./middlewares/auth.middleware");
const { metricsMiddleware } = require("./middlewares/metrics.middleware");

const timeController = require("./controllers/time.controller");

require("dotenv").config();

const app = express();

app.use(authMiddleware);

app.use(metricsMiddleware);

app.get("/time", timeController.getTime);

// 404
app.use((req, res) => {
  res.status(404).send({ message: "Not Found" });
});

module.exports = app;
