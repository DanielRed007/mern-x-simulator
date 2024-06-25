// lib/auth.js
import jwt, { JwtPayload } from "jsonwebtoken";

export interface CustomPayload extends JwtPayload {
  userId: string;
}

const JWT_SECRET: string = process.env.JWT_SECRET || "";

export function verifyToken(token: string): any {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
