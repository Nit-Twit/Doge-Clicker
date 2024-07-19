import { sql } from "@vercel/postgres"

type roles = "Owner" | "Player" | "Admin" | "Contributor"

export async function createUser(username: string, id: string) {
  let role: roles;
  let perms = 0;
  let avatars = ['doge'];

  if (id === "989924991535566879") {
    role = "Owner"
    perms = 6
    avatars.push('owner')
  } else {
    role = "Player"
  }

  const formattedAvatars = `{${avatars.map(av => `"${av}"`).join(',')}}`;


  try {
    await sql`INSERT INTO users (username, id, unlockedavatars, role, permissions) VALUES (${username}, ${id}, ${formattedAvatars}, ${role}, ${perms})`;
    return true;
  } catch (error) {
    console.error(error);
    return true;
  }
}

export async function getUserFromUsername(username: string) {
  try {
    const result = await sql`SELECT * FROM users WHERE username = ${username}`;
    return result.rows[0];
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getUserFromId(id: string) {
  try {
    const result = await sql`SELECT * FROM users WHERE id = ${id}`;
    return result.rows[0];
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export function getIdFromUrl(url: string) {
  return url.split("/")[4];
}

export function handleClick(userId: string) {
  const user = getUserFromId(userId).then((user) => {
    return user;
  })
}