import { verifyToken } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const token = authorization.split(" ")[1];
    const decoded: any = verifyToken(token);
    res
      .status(200)
      .json({ message: "This is a protected route", userId: decoded.userId });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
