import { Request, Response, NextFunction } from 'express';

import { battleSchema } from './schemas';

export const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const validation = battleSchema.validate(body);
  if (validation.error) {
    return res.status(400).send('Not a valid body.');
  }

  res.locals.fighters = body;
  return next();
}
