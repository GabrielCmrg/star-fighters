import axios from 'axios';

import { createFighter, getFighterByUsername, updateFighterById } from './repositories';

function countStars(data: any[]): number {
  const stars: number = data.reduce(
    (accumulated: number, element: any) => { accumulated + element.stargazers_count },
    0
  );
  return stars;
}

async function storeResult(result: any, participant1: string, participant2: string) {
  const participant1Register = {
    username: participant1,
    wins: 0,
    losses: 0,
    draws: 0,
  };
  const participant2Register = {
    username: participant2,
    wins: 0,
    losses: 0,
    draws: 0,
  };
  if (result.winner === participant1) {
    participant1Register.wins++;
    participant2Register.losses++;
  }
  if (result.draw) {
    participant1Register.draws++;
    participant2Register.draws++;
  }
  const fighter1 = await getFighterByUsername(participant1);
  if (!fighter1) {
    await createFighter(participant1Register);
  } else {
    await updateFighterById(participant1Register, fighter1.id);
  }
  const fighter2 = await getFighterByUsername(participant2);
  if (!fighter2) {
    await createFighter(participant2Register);
  } else {
    await updateFighterById(participant2Register, fighter2.id);
  }
}

export const battle = async (fighter1: string, fighter2: string) => {
  const fighter1Data = await axios.get(`https://api.github.com/users/${fighter1}/repos`);
  const fighter1StarCount: number = countStars(fighter1Data.data);
  const fighter2Data = await axios.get(`https://api.github.com/users/${fighter2}/repos`);
  const fighter2StarCount: number = countStars(fighter2Data.data);
  let winner: string | null = null;
  let loser: string | null = null;
  const draw: boolean = fighter1StarCount === fighter2StarCount;
  if (fighter1StarCount !== fighter2StarCount) {
    winner = fighter1StarCount > fighter2StarCount ? fighter1 : fighter2;
    loser = fighter1StarCount > fighter2StarCount ? fighter2 : fighter1;
  }
  const battleResult = {
    winner,
    loser,
    draw,
  };
  await storeResult(battleResult, fighter1, fighter2);
  return battleResult;
}
