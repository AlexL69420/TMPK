"use client";

import { Button, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiInbox, HiTable, HiUser } from "react-icons/hi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { ImUsers } from "react-icons/im";
import { ImUser } from "react-icons/im";

interface SidebarProps {
  onClose: () => void;
  onSignInClick: () => void;
  onOptionsClick: () => void;
}

export default function SideBar({
  onClose,
  onSignInClick,
  onOptionsClick,
}: SidebarProps) {
  return (
    <Sidebar aria-label="Default sidebar example" className={'border-2 border-gray-600'}>
      <div className="flex flex-row items-center justify-between bg-tmpk-gray dark:bg-slate-800">
        <h1 className="font-bold dark:text-white">Navigation</h1>
        <Button className='text-black dark:text-white bg-tmpk-gray dark:bg-tmpk-blue' onClick={onClose}>X</Button>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={ImUsers}>
            Subscriber
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={ImUser}>
            Address
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Commutator
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            CRM
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiAdjustmentsHorizontal}
            onClick={onOptionsClick}
          >
            Options
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight} onClick={onSignInClick}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
