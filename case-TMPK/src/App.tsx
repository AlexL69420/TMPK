import { useState } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/Sidebar";
import { ThisFooter } from "./components/Footer";

function App() {
  const [isNavigationVisible, setIsNavigationisible] = useState(false);

  const handleNavigationOpen = () => {
    setIsNavigationisible(true);
  };

  const handleNavigationClose = () => {
    setIsNavigationisible(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-baseline gap-2 dark:bg-gray-800">
      <Header onNavigationClick={handleNavigationOpen} />

      <div className="flex  flex-col items-start gap-2 dark:bg-gray-800">
        {isNavigationVisible && <SideBar onClose={handleNavigationClose} />}

        <MainContent />
      </div>
      <ThisFooter />
    </main>
  );
}

export default App;
