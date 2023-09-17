import { Request, Response } from "express";

exports.getMetrics = (req: Request, res: Response) => {
  res.send("metrics");
};
