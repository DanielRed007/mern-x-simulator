import { NextApiRequest, NextApiResponse } from "next";
import { Profile } from "@/app/types/profile";
import connectToDatabase from "@/lib/mongoose";
import ProfileSchema from "../../models/profile";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "GET") {
    const profiles: Profile[] = await ProfileSchema.find();

    if (profiles) {
      res.status(200).json(profiles);
    } else {
      res.status(404).json({ msg: "No Profiles Found" });
    }
  } else {
    res.status(405).end();
  }
}
