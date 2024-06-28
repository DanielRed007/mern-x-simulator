import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "@/lib/auth";

interface AuthRequest extends NextApiRequest {
  user: any;
}

export function authMiddleware(handler: any) {
  return async (req: AuthRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }

    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
}
