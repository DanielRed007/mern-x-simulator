import { FC, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowUturnLeftIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import { useTheme } from "@/app/context/ThemeContext";
import { ThemeSwitch } from "./ThemeSwitch";

interface DashBoardProps {
  logoutUser(): void;
}

export const DashboardHeader: FC<DashBoardProps> = ({ logoutUser }) => {
  const { theme, toggleTheme } = useTheme();

  const [enabled, setEnabled] = useState(false);

  return (
    <div className='w-full bg-blue-700'>
      <div className='container mx-auto px-7 flex justify-between items-center'>
        <nav className='flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4'>
          <div className='flex w-full flex-wrap items-center justify-between ml-7 px-7'>
            <div
              className='!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto'
              id='navbarSupportedContent1'
              data-twe-collapse-item
            >
              <span className='[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200'>
                <h1 className='text-2xl lg:text-4xl font-semibold text-gray-800 dark:text-white mr-3'>
                  X!
                </h1>
              </span>
            </div>

            <ThemeSwitch
              theme={theme}
              enabled={enabled}
              setEnabled={setEnabled}
              toggleTheme={toggleTheme}
            />

            <div className='relative flex items-center ml-5'>
              <Menu>
                <MenuButton className='inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
                  <UserCircleIcon className='size-5 fill-white/60' />
                </MenuButton>

                <MenuItems
                  transition
                  anchor='bottom end'
                  className='w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
                >
                  <MenuItem>
                    <button
                      onClick={logoutUser}
                      className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 dark:bg-gray-800'
                    >
                      <ArrowUturnLeftIcon className='size-4 fill-white/30' />
                      Logout
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
