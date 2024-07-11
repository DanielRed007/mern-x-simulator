import { NextApiRequest, NextApiResponse } from "next";
import { Profile } from "@/app/types/profile";
import connectToDatabase from "@/lib/mongoose";
import ContactSchema from "../../models/contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { name, email, message, action } = req.body;

    if (action === "send request") {
      const profiles: Profile[] = await ContactSchema.find();

      await ContactSchema.create({ name, email, message });

      res.status(201).json({ message: "Contact Request successfully" });

      if (profiles) {
        res.status(200).json(profiles);
      } else {
        res.status(404).json({ msg: "No Profiles Found" });
      }
    }
  } else {
    res.status(405).end();
  }
}
