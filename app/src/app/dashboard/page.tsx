"use client";

import { useState, useEffect } from "react";
import TweetForm from "../components/TweetForm";
import { useDashboard } from "../context/DashboardContext";
import Loader from "../components/shared/Loader";

function Dashboard() {
  const { dashboardTweetsData, dashboardLoading } = useDashboard();

  const [tweets, setTweets] = useState([
    { id: 1, content: "This is the first tweet!" },
    { id: 2, content: "This is the second tweet!" },
  ]);

  useEffect(() => {}, []);

  if (dashboardLoading) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto px-7 py-6 dark:bg-gray-400'>
      <h2 className='text-2xl font-bold mb-4'>Tweets</h2>
      <TweetForm />
      <div className='space-y-4'>
        {dashboardTweetsData.map((tweet: any, index: number) => (
          <div key={index} className='p-4 border rounded-lg bg-white shadow-sm'>
            {tweet.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
