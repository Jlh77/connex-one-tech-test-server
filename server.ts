import express from "express";

import authMiddleware from "./middlewares/auth.middleware";
const { timeController, metricsController } = require("./controllers");

require("dotenv").config();

const app = express();

app.use(authMiddleware);

app.get("/time", timeController.getTime);

app.get("/metrics", metricsController.getMetrics);

// 404
app.use((req, res) => {
  res.status(404).send({ message: "Not Found" });
});

module.exports = app;
