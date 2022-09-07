import connection from './postgres';

export async function getFighterByUsername(username: string) {
  const { rows } = await connection.query(
    'select * from fighters where username = $1',
    [username]
  );
  return rows[0];
}

export async function createFighter(register: any) {
  const { username, wins, losses, draws } = register;
  await connection.query(
    'insert into fighters (username, wins, losses, draws) values ($1, $2, $3, $4)',
    [username, wins, losses, draws]
  );
}
