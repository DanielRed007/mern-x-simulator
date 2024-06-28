import { FC, Fragment, MouseEventHandler } from "react";
import { UserCircleIcon, SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { Switch } from "@headlessui/react";

interface Props {
  theme: string;
  enabled: boolean;
  setEnabled(checked: boolean): void | undefined;
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ThemeSwitch: FC<Props> = ({
  theme,
  enabled,
  setEnabled,
  toggleTheme,
}) => {
  console.log(theme);
  return (
    <Fragment>
      {theme === "dark" ? (
        <MoonIcon className="size-7 fill-white mr-3" />
      ) : (
        <SunIcon className="size-7 fill-black mr-3" />
      )}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={toggleTheme}
        className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-400 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-700"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
    </Fragment>
  );
};
