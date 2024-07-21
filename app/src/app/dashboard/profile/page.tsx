"use client";

import UpdateProfileForm from "@/app/components/ProfileForm";

export default function Profile() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <div className='flex-grow flex items-center justify-center bg-gray-200 dark:bg-gray-700'>
        <UpdateProfileForm />
      </div>
    </div>
  );
}
