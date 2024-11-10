"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./FormClient.css";

interface FormProps {
  onClose: () => void;
}

export function FormClient({ onClose }: FormProps) {
  return (
    <div className="form-overlay">
      <form className="flex min-w-72 lg:w-96 max-w-md flex-col gap-4 rounded-2xl p-5">
        <div className="flex justify-between">
          <h1 className="dark:text-white">Registration Form</h1>
          <Button className="flex w-8 dark:text-white text-center" onClick={onClose}>
            X
          </Button>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your login" />
          </div>
          <TextInput
            id="email1"
            type=""
            placeholder="login"
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
