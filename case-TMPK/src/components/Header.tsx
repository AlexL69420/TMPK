import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";

("use client");

import { VscAccount } from "react-icons/vsc";

interface ButtonProps {
  onNavigationClick: () => void;
  onOptionsClick: () => void;
}

export default function Header({
  onNavigationClick,
  onOptionsClick,
}: ButtonProps) {
  return (
    <main className="flex h-16 w-full items-center justify-between gap-2 bg-teal-600 p-5 dark:bg-gray-800">
      <div className="flex h-12 flex-wrap items-center gap-1">
        <Avatar img="src\assets\logo.svg" alt="logo" rounded />
        <h1 className="text-2xl dark:text-white ">ТМПК</h1>
      </div>

      <div className="navBtn flex h-12 w-3/12 gap-2 p-0">
        <Button
          className="bg-cyan-500 p-1 dark:bg-teal-900"
          onClick={onNavigationClick}
        >
          Navigation
        </Button>
      </div>
      <Button className="bg-inherit" onClick={onOptionsClick}>
        <Avatar img={VscAccount} rounded />
      </Button>
    </main>
  );
}
