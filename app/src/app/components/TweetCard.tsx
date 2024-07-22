import React from "react";
import { Tweet } from "../types/tweet";

export const TweetCard = ({ message, createdAt, userId, username }: Tweet) => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4'>
      <div className='px-6 py-4'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 flex flex-row'>
            <img
              className='h-10 w-10 rounded-full'
              src={`https://unavatar.io/`}
              alt='avatar'
            />
            <h3 className='ml-4 text-blue-500 font-bold'>{username}</h3>
          </div>
        </div>
        <div className='mt-4 text-gray-700 text-base'>{message}</div>
      </div>
    </div>
  );
};
