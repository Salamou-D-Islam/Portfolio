import React, { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";
import { yellow } from "@mui/material/colors";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="max-md:hover:bg-neutral-300/50 p-1"
    >
      {darkMode ? (
        <DarkModeIcon className="md:hover:text-[var(--color-primary)]"></DarkModeIcon>
      ) : (
        <SunnyIcon className="text-amber-400 md:hover:text-[var(--color-secondary)] " />
      )}
    </button>
  );
}

export default DarkMode;
