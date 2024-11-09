import Link from "next/link";
import DarkModeToggle from "@/app/components/Buttons/DarkModeToggle";
import MobileMenu from "./HeaderMobile";
import { LogoIcon } from "@/app/assets/Icons/LogoIcon";

const Header = () => {
  return (
    <header className="bg-base-100 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-none md:static absolute left-1/2 md:left-0 transform -translate-x-1/2 md:transform-none">
          <a>
            <LogoIcon />
          </a>
        </div>

        <nav className="hidden md:flex space-x-4 items-center absolute left-1/2 transform -translate-x-1/2">
          <Link href="#home" scroll={true} className="btn btn-primary-content normal-case text-sm">
            Home
          </Link>
          <Link href="#about" scroll={true} className="btn btn-primary-content normal-case text-sm">
            Sobre
          </Link>
          <Link href="#methodology" scroll={true} className="btn btn-primary-content normal-case text-sm">
            Metodologia
          </Link>
          <Link href="#benefits" scroll={true} className="btn btn-primary-content normal-case text-sm">
            Benefícios
          </Link>
          <Link href="#contact" scroll={true} className="btn btn-primary-content normal-case text-sm">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
