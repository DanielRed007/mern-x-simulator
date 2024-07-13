"use client";

import { useState } from "react";

function Dashboard() {
  const [tweets, setTweets] = useState([
    { id: 1, content: "This is the first tweet!" },
    { id: 2, content: "This is the second tweet!" },
  ]);

  const [newTweet, setNewTweet] = useState("");

  const handleAddTweet = (e: any) => {
    e.preventDefault();
    if (newTweet.trim() !== "") {
      setTweets([
        ...tweets,
        { id: tweets.length + 1, content: newTweet.trim() },
      ]);
      setNewTweet("");
    }
  };

  return (
    <div className='container mx-auto px-7 py-6 dark:bg-gray-400'>
      <h2 className='text-2xl font-bold mb-4'>Tweets</h2>
      <form onSubmit={handleAddTweet} className='mb-4'>
        <textarea
          className='w-full p-2 border rounded-lg mb-2'
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-lg'
        >
          Tweet
        </button>
      </form>
      <div className='space-y-4'>
        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className='p-4 border rounded-lg bg-white shadow-sm'
          >
            {tweet.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
