import { Button, TextInput, Avatar } from "flowbite-react";
import { HiOutlineSearchCircle } from "react-icons/hi";

export default function ActualAddress() {
  return (
    <div className="flex  flex-col gap-2 bg-white p-5 text-black dark:bg-slate-800 dark:text-white">
      <h1>Введите фактический адрес</h1>
      <div className="flex flex-row  items-center gap-2">
        <TextInput
          id="contractIDInput"
          type=""
          placeholder="Введите фактический адрес"
          required
        />
        <Button className="bg-white text-black  dark:bg-slate-800  dark:text-white">
          <Avatar img={HiOutlineSearchCircle} rounded />
        </Button>
      </div>
      <div className="gap-2 border-2 border-gray-600">
        <div className="flex flex-row gap-2">
          <h1>Наименование коммутатора:</h1>
          <h1 id="commutatorName"></h1>
        </div>
        <div className="flex flex-row gap-2">
          <h1> IP-адрес коммутатора:</h1>
          <h1 id="commutatorID"></h1>
        </div>
        <div className="flex flex-row gap-2">
          <h1> номера портов:</h1>
          <h1 id="portNumber"></h1>
        </div>
      </div>
    </div>
  );
}
