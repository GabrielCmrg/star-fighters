import { Request, Response } from 'express';

import { battle } from './services';

export const makeBattle = async (req: Request, res: Response) => {
  const fighters: { firstUser: string, secondUser: string } = res.locals.fighters;
  try {
    const result = await battle(fighters.firstUser, fighters.secondUser);
    return res.send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Something went wrong.');
  }
}