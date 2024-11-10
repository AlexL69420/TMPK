export default function MainContent() {
  return (
    <main className="flex min-h-screen w-screen flex-col  gap-2 bg-white p-2 text-black dark:bg-slate-600 dark:text-white">
      <h1>Задачи</h1>
      <div className="flex flex-col gap-3">
        <div className="rounded-2xl bg-blue-800 dark:bg-gray-900">
          <div className="flex flex-col gap-2 rounded-2xl border-2 border-gray-600 p-2 text-white">
            <div className="flex flex-row gap-2 ">
              <h1>тема:</h1>
              <h1 id="taskTheme" className="w-12"></h1>
            </div>
            <div className="flex flex-row gap-2">
              <h1> описание:</h1>
              <h1 id="taskDesc" className="w-12"></h1>
            </div>
            <div className="flex flex-row gap-2">
              <h1> дату создания:</h1>
              <h1 id="creationDate" className="w-12"></h1>
            </div>
            <div className="flex flex-row gap-2">
              <h1> до какого числа необходимо выполнить:</h1>
              <h1 id="completionDAte" className="w-12"></h1>
            </div>
            <div className="flex flex-row gap-2">
              <h1> ФИО абонента:</h1>
              <h1 id="clientName" className="w-12"></h1>
            </div>
            <div className="flex flex-row gap-2">
              <h1> адрес абонента:</h1>
              <h1 id="clientAddress" className="w-12"></h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
