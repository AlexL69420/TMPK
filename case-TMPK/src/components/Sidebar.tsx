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
    <Sidebar aria-label="Default sidebar example">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold">Navigation</h1>
        <Button onClick={onClose}>X</Button>
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
