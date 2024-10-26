"use client";

import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { SunIcon } from "@/app/assets/Icons/SunIcons";
import { MoonIcon } from "@/app/assets/Icons/MoonIcon";

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value="synthwave"
        checked={theme === "black"}
        onChange={toggleTheme}
      />

      {/* sun icon */}
      <SunIcon />

      {/* moon icon */}
      <MoonIcon />
    </label>
  );
};

export default DarkModeToggle;
