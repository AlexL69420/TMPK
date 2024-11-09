"use client";
import { DarkThemeToggle } from "flowbite-react";
import { Button } from "flowbite-react";

interface OptionsProps {
  onClose: () => void;
}

export default function Options({ onClose }: OptionsProps) {
  return (
    <main className="fixed flex size-max items-center justify-center bg-gray-800">
      <div className="flex h-3/5 w-11/12 flex-col items-start justify-center gap-3 rounded-2xl bg-slate-100 dark:bg-gray-800">
        <div className="flex flex-row items-center justify-between gap-2">
          <DarkThemeToggle className="bg-white" />
          <h1 className="font-bold">Options</h1>
          <Button onClick={onClose}>X</Button>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Button>Изменение логина</Button>
          <Button>Изменение пароля</Button>
          <Button>Применить</Button>
        </div>
      </div>
    </main>
  );
}
