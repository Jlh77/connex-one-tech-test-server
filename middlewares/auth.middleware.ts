import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization !== process.env.SECRET_TOKEN) {
    return res.status(403).send({ message: "Forbidden" });
  }

  next();
};
