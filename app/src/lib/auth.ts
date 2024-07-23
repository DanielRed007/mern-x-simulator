// lib/auth.js
import jwt, { JwtPayload } from "jsonwebtoken";

export interface CustomPayload extends JwtPayload {
  userId: string;
}

export function verifyToken(token: string): any {
  try {
    const secret = getJwtSecret();
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

export function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  return secret;
}
