import { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "@/app/types/tweet";
import connectToDatabase from "@/lib/mongoose";
import TweetSchema from "../../models/tweet";
import UserSchema from "../../models/user";
import jwt from "jsonwebtoken";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { token, newTweet, action } = req.body;

  if (req.method === "GET") {
    const tweets: Tweet[] = await TweetSchema.find();

    if (tweets) {
      res.status(200).json(tweets);
    } else {
      res.status(404).json({ msg: "No Tweets Found" });
    }
  } else if (req.method === "POST") {
    if (action === "send request") {
      const JWT_SECRET: string = process.env.JWT_SECRET || "";

      if (!token) {
        return res.status(401).json({ message: "No token provided" }); // Unauthorized
      }

      const decoded: any = jwt.verify(token, JWT_SECRET);
      const userId: any = decoded.userId;

      const user = await UserSchema.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" }); // Not Found
      }

      const response: Tweet = await TweetSchema.create({
        userId,
        message: newTweet,
      });

      if (response) {
        res.status(201).json({ message: "Tweet Created successfully" });
      } else {
        res.status(500).json({ msg: "Error server found" });
      }
    }
  } else {
    res.status(405).end();
  }
}

export default handler;
