import bcrypt from "bcryptjs";

export async function HashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}
