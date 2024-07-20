// components/Sidebar.js
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex shadow-lg'>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-600 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className='p-4 mt-7'>
          <div className='flex items-center space-x-4 mb-7'>
            <h1 className='text-5xl font-bold mt-7'>X!</h1>
            <ChevronLeftIcon
              onClick={toggleSidebar}
              className='w-9 h-9 mt-7 cursor-pointer'
            />
          </div>
          <div className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white'></div>
          <ul className='space-y-4'>
            <li>
              <Link
                className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white'
                href='/dashboard'
              >
                Tweets
              </Link>
            </li>
            <li>
              <Link
                className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white'
                href='/dashboard/subscriptions'
              >
                Subscriptions
              </Link>
            </li>
            <li>
              <Link
                className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white'
                href='/dashboard/followers'
              >
                Followers
              </Link>
            </li>
            <li>
              <Link
                className='block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white'
                href='/dashboard/profile'
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex-1 p-4'>
        {!isOpen && (
          <ChevronRightIcon
            onClick={toggleSidebar}
            className='w-9 h-9 cursor-pointer text-white'
          />
        )}
      </div>
    </div>
  );
}
