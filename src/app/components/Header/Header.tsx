import Link from "next/link";
import DarkModeToggle from "../Buttons/DarkModeToggle";
import MobileMenu from "./HeaderMobile";

const Header = () => {
  return (
    <header className="bg-base-100 shadow-md p-4 flex item-center justify-between">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-primary">
          Logo
        </Link>
      </div>

      <nav className="hidden md:flex space-x-4 items-center">
        <Link href="/" className="btn btn-ghost normal-case text-sm">
          Home
        </Link>
        <Link href="/about" className="btn btn-ghost normal-case text-sm">
          About
        </Link>
        <Link href="/contact" className="btn btn-ghost normal-case text-sm">
          Contact
        </Link>
        <DarkModeToggle />
      </nav>

      <MobileMenu />
    </header>
  );
};

export default Header;
