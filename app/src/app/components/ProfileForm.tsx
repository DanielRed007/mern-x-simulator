"use client";

import React, { useState, FormEvent } from "react";

const UpdateProfileForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Profile updated:", { email, displayName, profileImageUrl });
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center dark:bg-gray-800'>
      <form
        onSubmit={handleSubmit}
        className='max-w-md w-full bg-white p-8 rounded-lg shadow-md bg-gray-400 dark:bg-gray-400'
      >
        <div className='mb-4'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Display Name'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-6'>
          <input
            type='url'
            placeholder='Profile Image URL'
            value={profileImageUrl}
            onChange={(e) => setProfileImageUrl(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
