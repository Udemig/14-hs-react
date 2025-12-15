import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-card/90 shadow-sm z-10 backdrop-blur-sm">
      <div className="container py-4 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <h1 className="text-xl font-semibold text-text-primary">NotApp</h1>
          </Link>

          {/* Navigation */}
          <nav>
            <NavLink to="/" className="nav-link">
              Notlar
            </NavLink>
            <NavLink to="/create" className="nav-link">
              Yeni Not
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
