import { PipelineStage } from "mongoose";

export const tweetsByUserIdQuery = (userId: string): PipelineStage[] => {
  return [
    {
      $addFields: {
        isCurrentUser: {
          $cond: [{ $eq: ["$userId", userId] }, 1, 0],
        },
      },
    },
    {
      $sort: { isCurrentUser: -1, createdAt: -1 },
    },
    {
      $project: {
        isCurrentUser: 0,
      },
    },
  ];
};
