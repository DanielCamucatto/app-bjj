"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import DarkModeToggle from "../Buttons/DarkModeToggle";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        <HiMenu size={24} className="text-primary" />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 bg-base-100 shadow-lg rounded-box w-48 p-4">
          <nav className="flex flex-col space-y-2">
            <Link
              href="#home"
              className="btn btn-primary-content normal-case text-sm"
              scroll={false}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="btn btn-primary-content normal-case text-sm"
              scroll={false}
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link
              href="#methodology"
              className="btn btn-primary-content normal-case text-sm"
              onClick={toggleMenu}
              scroll={false}
            >
              Metodologia
            </Link>
            <Link
              href="#benefits"
              className="btn btn-primary-content normal-case text-sm"
              onClick={toggleMenu}
              scroll={false}
            >
              Benefícios
            </Link>
            <Link
              href="#contact"
              className="btn btn-primary-content normal-case text-sm"
              onClick={toggleMenu}
              scroll={false}
            >
              Contato
            </Link>
            <DarkModeToggle />
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
