import { Request, Response } from 'express';

import { battle, retrieveRanking } from './services';

export const makeBattle = async (req: Request, res: Response) => {
  const fighters: { firstUser: string, secondUser: string } = res.locals.fighters;
  const result = await battle(fighters.firstUser, fighters.secondUser);
  return res.json(result);
}

export const getRanking = async (req: Request, res: Response) => {
  const ranking: any = await retrieveRanking();
  return res.json(ranking);
}
