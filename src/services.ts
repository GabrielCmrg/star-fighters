import axios from 'axios';

function countStars(data: any[]): number {
  const stars: number = data.reduce(
    (accumulated: number, element: any) => { accumulated + element.stargazers_count },
    0
  );
  return stars;
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
  return battleResult;
}
