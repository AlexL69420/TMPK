"use client";
import { Link } from "react-router-dom";
import { DarkThemeToggle, Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Options() {
  return (
    <main className="fixed flex size-full items-center justify-center bg-gray-600">
      <div className="m-2 flex w-72 flex-col items-center justify-center gap-3 rounded-2xl bg-slate-100 dark:bg-gray-800 lg:w-96">
        <div className="flex w-full flex-row items-center justify-between gap-2 p-2">
          <DarkThemeToggle className="bg-white" />
          <h1 className="font-bold dark:text-white">Options</h1>
          <Button className="bg-white text-black dark:bg-slate-800 dark:text-white">
            <Link to="/">X</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your login" />
            </div>
            <TextInput id="email1" type="" placeholder="login" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button className="bg-tmpk-blue dark:bg-tmpk-blue my-4" type="submit">
            Change
          </Button>
        </div>
      </div>
    </main>
  );
}
