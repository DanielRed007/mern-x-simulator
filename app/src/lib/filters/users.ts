import { Tweet } from "@/app/types/tweet";

export const filterDashboardTweets = (
  tweets: Tweet[],
  userId: string | null
): Tweet[] => {
  console.log({ tweets, userId });
  return tweets;
};
