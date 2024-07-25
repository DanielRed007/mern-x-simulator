import { Tweet } from "@/app/types/tweet";

export const filterDashboardTweets = (
  tweets: Tweet[],
  userId: string | null
): Tweet[] => {
  if (!userId) {
    return tweets;
  }

  return tweets.sort((a, b) => {
    if (a.userId === userId && b.userId !== userId) {
      return -1;
    } else if (a.userId !== userId && b.userId === userId) {
      return 1;
    } else {
      return 0;
    }
  });
};
