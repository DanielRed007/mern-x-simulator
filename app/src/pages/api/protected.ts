import { authMiddleware } from "@/app/middleware/authMiddleware";
import { NextApiRequest, NextApiResponse } from "next";

interface AuthRequest extends NextApiRequest {
  user: any;
}

const handler = (req: AuthRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
};

export default authMiddleware(handler);
