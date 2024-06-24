// src/pages/api/items.ts
import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/mongoose";
import Item from "../../models/item";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "GET") {
    try {
      const items = await Item.find({});
      res.status(200).json({ success: true, data: items });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).json({ success: true, data: newItem });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
