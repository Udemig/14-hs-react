import type { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Header: FC = () => {
  return (
    <header className="w-full z-10 glass-dark backdrop-blur-xl border-b border-white/10 border-x-0!">
      <div className="max-width flex-between padding-x padding-y">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            width={50}
            height={50}
            className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />

          <h1 className="text-xl md:text-2xl font-bold text-transparent text-gradient">
            CarHub
          </h1>
        </Link>

        <Button text="Kaydol" />
      </div>
    </header>
  );
};

export default Header;
