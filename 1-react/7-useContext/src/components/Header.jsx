import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);

  // sepetteki toplam ürün miktarını hesapla
  const total = basket.reduce((total, item) => total + item.amount, 0);

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
            Sepet ({total})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
