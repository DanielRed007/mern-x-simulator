import { Profile } from "@/app/types/profile";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const profiles: Profile[] = [
      {
        _id: "Ytsmy0PabmD2tEMUgIprvGh0",
        name: "LjkYoJ UdRZbMEZ",
        role: "Admin",
        profileImg:
          "https://pbs.twimg.com/profile_images/1308385514744098816/oDXuaci__400x400.jpg",
        country: "USA",
        followingCount: 4533,
        followerCount: 2654,
        tweetCount: 4795,
      },
      {
        _id: "xmZiaHidR3ChY4AHYnwLGLpU",
        name: "z7gP8l kLK6lgDz",
        role: "User",
        profileImg:
          "https://pbs.twimg.com/profile_images/1308385514744098816/oDXuaci__400x400.jpg",
        country: "Australia",
        followingCount: 4089,
        followerCount: 1758,
        tweetCount: 8317,
      },
      {
        _id: "rt5XkCH5MyWdGcneNwxbOTbb",
        name: "cVc0kg ASBf6Z1G",
        role: "Admin",
        profileImg:
          "https://pbs.twimg.com/profile_images/1308385514744098816/oDXuaci__400x400.jpg",
        country: "Canada",
        followingCount: 4460,
        followerCount: 4789,
        tweetCount: 9853,
      },
    ];
    res.status(200).json(profiles);
  } else {
    res.status(405).end();
  }
}
