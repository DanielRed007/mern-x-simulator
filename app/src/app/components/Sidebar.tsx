// components/Sidebar.js
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex shadow-lg'>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
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
          <div className='flex-grow border-t border-gray-400 my-4'></div>
          <ul className='space-y-4'>
            <li>
              <a href='#' className='hover:underline block px-2'>
                Tweets
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline block px-2'>
                Subscriptions
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline block px-2'>
                Followers
              </a>
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
