import { Tweet } from "@/app/types/tweet";

export const filterDashboardTweets = (
  tweets: Tweet[],
  userId: string | null
): Tweet[] => {
  if (!userId) {
    return tweets;
  }

  return tweets.reverse();
};
