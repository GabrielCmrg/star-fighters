import connection from './postgres';

export async function getFighterByUsername(username: string) {
  const { rows } = await connection.query(
    'select * from fighters where username = $1',
    [username]
  );
  return rows[0];
}
