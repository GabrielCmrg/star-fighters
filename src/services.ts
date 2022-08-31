export const battle = async (fighter1: string, fighter2: string) => {
  return {
    "winner": "fulano", // nulo se empate
    "loser": "ciclana", //nulo se empate
    "draw": false // true se empate
  };
}
