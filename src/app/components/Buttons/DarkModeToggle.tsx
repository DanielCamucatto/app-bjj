'use client'

import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const DarkModeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="btn btn-primary"
            onClick={toggleTheme}
        >
            {theme === 'dark' ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
