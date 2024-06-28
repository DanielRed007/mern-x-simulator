"use client";

import { useState } from "react";

import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
} from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
  UserCircleIcon,
  UserIcon,
  UserPlusIcon,
  MagnifyingGlassCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/16/solid";
import { useTheme } from "@/app/context/ThemeContext";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const [enabled, setEnabled] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-4xl font-bold text-gray-800">X!</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="">
              <Link className="text-gray-600 hover:text-gray-800" href="/">
                Home
              </Link>
            </li>
            <li className="flex justify-between">
              <ThemeSwitch
                theme={theme}
                enabled={enabled}
                setEnabled={setEnabled}
                toggleTheme={toggleTheme}
              />
            </li>
            <li>
              <div className="text-right">
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    <UserCircleIcon className="size-4 fill-white/60" />
                    <ChevronDownIcon className="size-4 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 bg-gray-800 origin-top-right rounded-xl border border-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <MenuItem>
                      <Link
                        href="/login"
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <UserIcon className="size-4 fill-white/30" />
                        Login
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="/register"
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <UserPlusIcon className="size-4 fill-white/30" />
                        Register
                      </Link>
                    </MenuItem>
                    <div className="my-1 h-px bg-white/5" />
                    <MenuItem>
                      <Link
                        href="/about"
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <MagnifyingGlassCircleIcon className="size-4 fill-white/30" />
                        About
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="/contact"
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <EnvelopeIcon className="size-4 fill-white/30" />
                        Contact
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
