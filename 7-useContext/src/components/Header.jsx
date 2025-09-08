import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Context Store
        </Link>

        <div className="d-flex gap-3">
          <Link to="/" className="fw-bold">
            Anasayfa
          </Link>
          <Link to="/basket" className="fw-bold">
            Sepet (3)
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
