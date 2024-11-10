import { Link } from "react-router-dom";
import { Button, Label, TextInput, Avatar } from "flowbite-react";
import { HiOutlineSearchCircle } from "react-icons/hi";
("use client");

export default function Address() {
  return (
    <main className="flex flex-col gap-2 bg-white p-5 text-black dark:bg-slate-800 dark:text-white ">
      <div className="flex flex-row justify-end">
        <Button className="bg-white text-black dark:bg-slate-800 dark:text-white">
          <Link to="/navigation">X</Link>
        </Button>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col justify-center gap-2">
          <div className="mb-2 block">
            <Label
              htmlFor="contractID"
              value="Введите ID договора IP или MAC-address в поле для ввода текста"
            />
          </div>
          <div className="flex flex-row  items-center gap-2">
            <TextInput
              id="contractIDInput"
              type=""
              placeholder="ID договора IP или MAC-address"
              required
            />
            <Button className="bg-white text-black  dark:bg-slate-800  dark:text-white">
              <Avatar img={HiOutlineSearchCircle} rounded />
            </Button>
          </div>
        </div>

        <div className="gap-2 border-2 border-gray-600">
          <div className="flex flex-row gap-2">
            <h1>ID договора:</h1>
            <h1 id="clientContractID"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>ФИО абонента:</h1>
            <h1 id="clientFullname"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>статус:</h1>
            <h1 id="clientStatus"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>адрес:</h1>
            <h1 id="clientAddress"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>телефон:</h1>
            <h1 id="clientPhoneNumber"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>наименования услуг:</h1>
            <h1 id="clientServices"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>наименование коммутатора:</h1>
            <h1 id="clientCommutator"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>IP-адрес коммутатора:</h1>
            <h1 id="clientCommutatorIP"></h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1>номер порта:</h1>
            <h1 id="clientPortNumber"></h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-2 p-2">
          <Button className="bg-blue-500 text-black dark:bg-slate-500 dark:text-white">
            Ethernet
          </Button>
          <Button className="bg-blue-500 text-black dark:bg-slate-500 dark:text-white">
            Получить ссылки на задачи по абоненту в Битрикс24
          </Button>
          <Button className="bg-blue-500 text-black dark:bg-slate-500 dark:text-white">
            Оплата СБП
          </Button>
        </div>
      </div>
    </main>
  );
}
