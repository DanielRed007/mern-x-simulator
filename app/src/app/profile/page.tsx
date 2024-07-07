"use client";

import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";

export default function Profile() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Header />
      <div className='flex-grow flex items-center justify-center bg-gray-200 dark:bg-gray-700'>
        <div>Profile Coming Soon!</div>
      </div>
      <Footer />
    </div>
  );
}
