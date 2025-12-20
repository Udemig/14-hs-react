import { Link, Links } from "react-router-dom";
import { useGetPlaces } from "../../services/hooks";

const Header = () => {
  const { data } = useGetPlaces();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200 shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <div className="flex gap-10 items-center">
          <Link to="/" className="group">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl bg-linear-to-r from-blue-600 to-blue-500 bg-clip group-hover:scale-105 transition-all">
              Tripster
            </h1>
          </Link>

          <nav className="flex gap-6 items-center">
            <Link to="/" className="nav-link group">
              Oteller ({data?.length})
              <span className="link-line" />
            </Link>
            <Link to="/" className="max-md:hidden nav-link group">
              Popüler
              <span className="link-line" />
            </Link>
            <Link to="/admin/create" className="nav-link group">
              Oluştur
              <span className="link-line" />
            </Link>
          </nav>
        </div>

        <div className="flex gap-3 items-center">
          <button className="btn-secondary max-md:hidden">Kayıt Ol</button>
          <button className="btn-primary">Giriş Yap</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
