"use client";

import { Link } from "react-router-dom";
import { Button, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiInbox, HiUser } from "react-icons/hi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { ImUsers } from "react-icons/im";
import { ImUser } from "react-icons/im";

interface SidebarProps {
  onClose: () => void;
}

export default function SideBar({ onClose }: SidebarProps) {
  return (
    <Sidebar
      aria-label="Default sidebar example"
      className={"border-2 border-gray-600"}
    >
      <div className="bg-tmpk-gray flex flex-row items-center justify-between dark:bg-slate-800">
        <h1 className="font-bold dark:text-white">Navigation</h1>
        <Button
          className="bg-tmpk-gray dark:bg-tmpk-blue text-black dark:text-white"
          onClick={onClose}
        >
          X
        </Button>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={ImUsers}>
            <Link to="/subscriber">Subscriber</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={ImUser}>
            <Link to="/address">Address</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            <Link to="/commutator">Commutator</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <Link to="/CRM">CRM</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiAdjustmentsHorizontal}>
            <Link to="/options">Options</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <Link to="/">Sign In</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
