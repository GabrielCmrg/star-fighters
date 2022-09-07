import { Request, Response, NextFunction } from "express";

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  console.error(error);
  if (error.response.status === 404) {
    return res.status(404).send('This fighter is not a GitHub user.');
  }
  return res.status(500).send('Something went wrong.');
}
