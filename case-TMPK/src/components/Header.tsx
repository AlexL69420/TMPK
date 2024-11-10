import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";

("use client");

import { VscAccount } from "react-icons/vsc";

interface ButtonProps {
  onNavigationClick: () => void;
}

export default function Header({ onNavigationClick }: ButtonProps) {
  return (
    <main className="bg-tmpk-blue flex h-16 w-full items-center justify-between gap-2 bg-blue-700 dark:bg-slate-700">
      <div className="flex h-12 flex-wrap items-center gap-1">
        <Avatar
          className={"w-12"}
          img="src\assets\logo.svg"
          alt="logo"
          rounded
        />
        <h1 className="text-2xl text-white ">ТМПК</h1>
      </div>

      <div className="navBtn flex h-12 w-3/12 gap-2 p-0">
        <Button
          className="bg-tmpk-blue bg-blue-500  p-1 dark:bg-slate-500"
          onClick={onNavigationClick}
        >
          Navigation
        </Button>
      </div>
      <Button className="bg-inherit dark:bg-inherit">
        <Link to="/options">
          <Avatar img={VscAccount} rounded />
        </Link>
      </Button>
    </main>
  );
}
