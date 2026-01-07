import NavLink from "./nav-link";

const Header = () => {
  return (
    <header className="p-10 border-b flex justify-between">
      <NavLink href="/form">Form</NavLink>
      <NavLink href="/wonders">Harikalar</NavLink>
      <NavLink href="/about">Hakkımızda</NavLink>
      <NavLink href="/contact">İletişim</NavLink>
      <NavLink href="/recipes-client">Tarifler (C)</NavLink>
      <NavLink href="/recipes-server">Tarifler (S)</NavLink>
    </header>
  );
};

export default Header;
