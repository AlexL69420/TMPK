import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
export default function Subscriber() {
  return (
    <div className="flex flex-col gap-2">
      <Button className="bg-white text-black dark:bg-slate-800 dark:text-white">
        <Link to="/">X</Link>
      </Button>
    </div>
  );
}
