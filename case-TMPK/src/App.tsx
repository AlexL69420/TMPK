import { useState } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Options from "./components/Pages/Options";
import SideBar from "./components/Sidebar";
import { ThisFooter } from "./components/Footer";
import { FormClient } from "./components/Form/FormClient";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleFormOpen = () => {
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  const [isNavigationVisible, setIsNavigationisible] = useState(false);

  const handleNavigationOpen = () => {
    setIsNavigationisible(true);
  };

  const handleNavigationClose = () => {
    setIsNavigationisible(false);
  };

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleOptionsOpen = () => {
    setIsOptionsVisible(true);
  };

  const handleOptionsClose = () => {
    setIsOptionsVisible(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-baseline gap-2 dark:bg-gray-800">
      <Header
        onNavigationClick={handleNavigationOpen}
        onOptionsClick={handleOptionsOpen}
      />
      {isFormVisible && <FormClient onClose={handleFormClose} />}

      <div className="flex  flex-col items-start gap-2 dark:bg-gray-800">
        {isNavigationVisible && (
          <SideBar
            onClose={handleNavigationClose}
            onSignInClick={handleFormOpen}
          />
        )}

        <MainContent />
      </div>
      <ThisFooter />
    </main>
  );
}

export default App;
