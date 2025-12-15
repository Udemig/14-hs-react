import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-zinc-300 shadow-sm">
      <div className="container flex justify-between">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Tripster</h1>

        <nav className="flex gap-4 items-center">
          <Link to="/">Oteller (?)</Link>
          <Link to="/" className="max-md:hidden">
            Popüler
          </Link>
          <Link to="/">Oluştur</Link>
        </nav>

        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 px-4 py-2 rounded-full max-md:hidden">Kayıt Ol</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Giriş Yap</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
