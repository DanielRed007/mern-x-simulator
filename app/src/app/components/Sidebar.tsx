// components/Sidebar.js
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex'>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='p-4'>
          <div className='flex-1 p-4 mr-9'>
            <button
              onClick={toggleSidebar}
              className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none'
            >
              {isOpen ? "Close Sidebar" : "Open Sidebar"}
            </button>
          </div>
          <h1 className='text-2xl font-bold'>Sidebar</h1>
          <ul className='mt-4'>
            <li className='mt-2'>
              <a href='#' className='hover:underline'>
                Item 1
              </a>
            </li>
            <li className='mt-2'>
              <a href='#' className='hover:underline'>
                Item 2
              </a>
            </li>
            <li className='mt-2'>
              <a href='#' className='hover:underline'>
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex-1 p-4 mr-9'>
        <button
          onClick={toggleSidebar}
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none'
        >
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
      </div>
    </div>
  );
}
