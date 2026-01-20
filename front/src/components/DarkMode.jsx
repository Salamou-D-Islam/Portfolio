import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="p-8">
      <button onClick={toggleDarkMode}>
        <DarkModeIcon>{darkMode ? "dark" : ""}</DarkModeIcon>
      </button>
    </div>
  );
}

export default DarkMode;
