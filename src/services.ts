import axios from 'axios';

function countStars(data: any[]): number {
  const stars: number = data.reduce(
    (accumulated: number, element: any) => { accumulated + element.stargazers_count },
    0
  );
  return stars;
}

export const battle = async (fighter1: string, fighter2: string) => {
  try {
    const fighter1Data = await axios.get(`https://api.github.com/users/${fighter1}/repos`);
    const fighter1StarCount: number = countStars(fighter1Data.data);
    const fighter2Data = await axios.get(`https://api.github.com/users/${fighter2}/repos`);
    const fighter2StarCount: number = countStars(fighter2Data.data);
  } catch (error: any) {
    console.error(error);
    if (error.response.status === 404) {
      throw { errorType: 'userNotFound', message: 'This fighter is not a GitHub user.' };
    }
    throw error;
  }
  return {
    "winner": "fulano", // nulo se empate
    "loser": "ciclana", //nulo se empate
    "draw": false // true se empate
  };
}
