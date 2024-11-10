import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import ActualAddress from "./Commutator Variants/ActuallAddress";
import IPAddress from "./Commutator Variants/IPaddress";

export default function Commutator() {
  const [isIpAddressVisible, setIsIpAddressVisible] = useState(false);
  const [isActualAddressVisible, setIsActualAddressVisible] = useState(false);

  const handleIPAddressOpen = () => {
    setIsIpAddressVisible(true);
    setIsActualAddressVisible(false);
  };

  const handleActualAddressOpen = () => {
    setIsActualAddressVisible(true);
    setIsIpAddressVisible(false);
  };

  return (
    <div className="fixed flex size-full flex-col gap-2  bg-white p-5 text-black dark:bg-slate-800 dark:text-white">
      <div className="flex flex-row justify-end">
        <Button className="bg-white text-black dark:bg-slate-800 dark:text-white">
          <Link to="/navigation">X</Link>
        </Button>
      </div>
      <h1>Выберите тип поиска</h1>
      <div className="flex flex-row justify-center gap-3">
        <Button
          className="bg-blue-500 text-black dark:bg-slate-500 dark:text-white"
          onClick={handleIPAddressOpen}
        >
          Поиск по IP-адресу
        </Button>
        <Button
          className="bg-blue-500 text-black dark:bg-slate-500 dark:text-white"
          onClick={handleActualAddressOpen}
        >
          Поиск по фактическому адресу
        </Button>
      </div>
      {isIpAddressVisible && <IPAddress />}
      {isActualAddressVisible && <ActualAddress />}
    </div>
  );
}
