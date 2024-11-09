"use client";

import { useState } from "react";
// import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import DarkModeToggle from "../Buttons/DarkModeToggle";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu(); // Fecha o menu após clicar
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        <HiMenu size={24} className="text-primary" />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 bg-base-100 shadow-lg rounded-box w-48 p-4 z-50">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick("home")}
              className="btn btn-primary-content normal-case text-sm"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="btn btn-primary-content normal-case text-sm"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick("methodology")}
              className="btn btn-primary-content normal-case text-sm"
            >
              Metodologia
            </button>
            <button
              onClick={() => handleNavClick("benefits")}
              className="btn btn-primary-content normal-case text-sm"
            >
              Benefícios
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="btn btn-primary-content normal-case text-sm"
            >
              Contato
            </button>
            <DarkModeToggle />
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
