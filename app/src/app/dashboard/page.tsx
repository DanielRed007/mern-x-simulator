"use client";

import { useState, useEffect } from "react";
import TweetForm from "../components/TweetForm";
import { useDashboard } from "../context/DashboardContext";
import Loader from "../components/shared/Loader";
import { Tweet } from "../types/tweet";
import { TweetCard } from "../components/TweetCard";

function Dashboard() {
  const { dashboardTweetsData, dashboardLoading } = useDashboard();

  useEffect(() => {}, []);

  if (dashboardLoading) {
    return <Loader />;
  }

  return (
    <div className='container rounded ml-7 px-7 py-6 mb-7 dark:bg-gray-400'>
      <h2 className='text-2xl font-bold mb-4'>Tweets</h2>
      <TweetForm />
      <div className='space-y-4'>
        {dashboardTweetsData.map((tweet: Tweet, index: number) => (
          <TweetCard
            key={index}
            message={tweet.message}
            userId={tweet.userId}
            createdAt={tweet.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
