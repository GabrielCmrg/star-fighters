import { Request, Response } from 'express';

import { battle } from './services';

export const makeBattle = async (req: Request, res: Response) => {
  const fighters: { firstUser: string, secondUser: string } = res.locals.fighters;
  const result = await battle(fighters.firstUser, fighters.secondUser);
  return res.send(result);
}
