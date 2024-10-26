'use client'

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
        <HiMenu size={24}/>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-base-100 shadow-lg rounded-box w-48 p-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="btn btn-ghost normal-case text-sm" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="btn btn-ghost normal-case text-sm" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/contact" className="btn btn-ghost normal-case text-sm" onClick={toggleMenu}>
              Contact
            </Link>
            <DarkModeToggle />
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
