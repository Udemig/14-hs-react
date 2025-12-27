import type { FC } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import UserInfo from "./user-info";

const Header: FC = () => {
  return (
    <header className="bg-white grid grid-cols-3 p-4 md:p-6 xl:p-8 rounded-[24px] xl:rounded-[32px] mb-6 md:mb-7 xl:mb-8">
      <button className="md:hidden cursor-pointer text-xl">
        <Menu />
      </button>

      <nav className="hidden md:flex items-center gap-5 xl:gap-10 font-semibold">
        <Link to="/" className="whitespace-nowrap">
          Yeni Gelenler
        </Link>
        <Link to="/">Erkek</Link>
        <Link to="/">Kadın</Link>
      </nav>

      <Link to="/" className="flex justify-center items-center">
        <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
      </Link>

      <div className="flex justify-end items-center">
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
