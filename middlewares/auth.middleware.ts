import { NextFunction, Request, Response } from "express";

exports.authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization !== process.env.SECRET_TOKEN) {
    return res.status(403).send({ message: "Forbidden" });
  }

  next();
};
