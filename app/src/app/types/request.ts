import { NextApiRequest } from "next";

export interface AuthRequest extends NextApiRequest {
  user: any;
}
