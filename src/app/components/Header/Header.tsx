import Link from "next/link";
import DarkModeToggle from "@/app/components/Buttons/DarkModeToggle";
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
        <Link href="/" className="btn btn-primary-content normal-case text-sm">
          Home
        </Link>
        <Link href="/about" className="btn btn-primary-content normal-case text-sm">
          About
        </Link>
        <Link href="/contact" className="btn btn-primary-content normal-case text-sm">
          Contact
        </Link>
      </nav>
    <DarkModeToggle />

      <MobileMenu />
    </header>
  );
};

export default Header;
