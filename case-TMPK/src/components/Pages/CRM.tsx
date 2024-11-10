import { Link } from "react-router-dom";
import { Button, Label, TextInput, Avatar } from "flowbite-react";
import { HiOutlineSearchCircle } from "react-icons/hi";

export default function CRM() {
  return (
    <div className="fixed flex size-full flex-col gap-2  bg-white p-5 text-black dark:bg-slate-800 dark:text-white">
      <div className="flex flex-row justify-end">
        <Button className="bg-white text-black dark:bg-slate-800 dark:text-white">
          <Link to="/navigation">X</Link>
        </Button>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="mb-2 block">
          <Label htmlFor="taskNumberInput" value="Введите номер задачи (СRM)" />
        </div>
        <div className="flex flex-row  items-center gap-2">
          <TextInput
            id="taskNumberInput"
            type=""
            placeholder="Введите номер задачи (СRM)"
            required
          />
          <Button className="bg-white text-black  dark:bg-slate-800  dark:text-white">
            <Avatar img={HiOutlineSearchCircle} rounded />
          </Button>
        </div>
      </div>
      <div className="gap-2 border-2 border-gray-600">
        <div className="flex flex-row gap-2">
          <h1>Описание задачи:</h1>
          <h1 id="clientContractID"></h1>
        </div>
        <div className="flex flex-row gap-2">
          <h1>номер задачи:</h1>
          <h1 id="taskNumber"></h1>
        </div>
        <div className="flex flex-row gap-2">
          <h1> тема задачи:</h1>
          <h1 id="taskTheme"></h1>
        </div>
        <div className="flex flex-row gap-2">
          <h1> номер договора:</h1>
          <h1 id="contractNumber"></h1>
        </div>
      </div>
    </div>
  );
}
