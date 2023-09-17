import { Request, Response } from "express";

exports.getTime = (req: Request, res: Response) => {
  res.send("time");
};
