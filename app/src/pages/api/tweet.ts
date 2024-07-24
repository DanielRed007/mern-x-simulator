import { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "@/app/types/tweet";
import connectToDatabase from "@/lib/mongoose";
import TweetSchema from "../../models/tweet";
import UserSchema from "../../models/user";
import jwt from "jsonwebtoken";
import { getJwtSecret } from "@/lib/auth";
import { AuthRequest } from "@/app/types/request";
import { filterDashboardTweets } from "@/lib/filters/users";

async function handler(req: AuthRequest, res: NextApiResponse) {
  await connectToDatabase();

  const secret = getJwtSecret();

  const { token, newTweet, action } = req.body;

  if (req.method === "GET") {
    const token: any = req.headers.authorization?.split(" ")[1];
    const decoded: any = jwt.verify(token, secret);
    const userId: any = decoded.userId;

    const tweets: Tweet[] = await TweetSchema.find();

    const filteredTweets = filterDashboardTweets(tweets, userId);

    if (filteredTweets) {
      res.status(200).json(tweets);
    } else {
      res.status(404).json({ msg: "No Tweets Found" });
    }
  } else if (req.method === "POST") {
    if (action === "send request") {
      if (!token) {
        return res.status(401).json({ message: "No token provided" }); // Unauthorized
      }

      const decoded: any = jwt.verify(token, secret);
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
