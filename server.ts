import express from "express";

import authMiddleware from "./middlewares/auth.middleware";

require("dotenv").config();

const app = express();

app.use(authMiddleware);

// 404
app.use((req, res) => {
  res.status(404).send({ message: "Not Found" });
});

module.exports = app;
