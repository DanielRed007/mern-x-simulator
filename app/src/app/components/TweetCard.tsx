import React from "react";
import { Tweet } from "../types/tweet";

export const TweetCard = ({ message, createdAt, userId }: Tweet) => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4'>
      <div className='px-6 py-4'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <img
              className='h-10 w-10 rounded-full'
              src={`https://unavatar.io/`}
              alt='avatar'
            />
          </div>
          {/* <div className="ml-4">
            <div className="text-lg font-medium text-black">{username}</div>
            <div className="text-gray-600">@{handle}</div>
          </div>
          <div className="ml-auto text-gray-600">{time}</div> */}
        </div>
        <div className='mt-4 text-gray-700 text-base'>{message}</div>
      </div>
    </div>
  );
};
