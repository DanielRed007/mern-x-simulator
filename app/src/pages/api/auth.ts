import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectToDatabase from "../../lib/mongoose";
import UserSchema from "../../models/user";

const JWT_SECRET: string = process.env.JWT_SECRET || "";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { method } = req;

  if (method === "POST") {
    const { email, password, username, action } = req.body;

    if (action === "register") {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserSchema.create({
          email,
          username,
          password: hashedPassword,
        });

        res.status(201).json({ message: "User registered successfully", user });
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    } else if (action === "login") {
      try {
        const user = await UserSchema.findOne({ email });

        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(400).json({ error: "Invalid credentials" });
        }

        localStorage.setItem("userId", user._id);
        localStorage.setItem("userName", user.username);
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
          expiresIn: "1h",
        });

        res.status(200).json({ message: "Logged in successfully", token });
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(400).json({ error: "Invalid action" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default handler;
