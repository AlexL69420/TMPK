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
    <main className="flex h-16 w-full items-center justify-between gap-2 bg-tmpk-blue">
      <div className="flex h-12 flex-wrap items-center gap-1">
        <Avatar className={'w-12'} img="src\assets\logo.svg" alt="logo" rounded />
        <h1 className="text-2xl text-white ">ТМПК</h1>
      </div>

      <div className="navBtn flex h-12 w-3/12 gap-2 p-0">
        <Button
          className="bg-tmpk-blue p-1"
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
