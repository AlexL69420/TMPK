"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./FormClient.css";

interface FormProps {
  onClose: () => void;
}

export function FormClient({ onClose }: FormProps) {
  return (
    <div className="form-overlay">
      <form className="flex w-4/5 max-w-md flex-col gap-4 rounded-2xl bg-teal-500 p-5 dark:bg-cyan-900">
        <div className="flex justify-between">
          <h1 className="dark:text-white">Registration Form</h1>
          <Button className="flex w-8 justify-end" onClick={onClose}>
            x
          </Button>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
