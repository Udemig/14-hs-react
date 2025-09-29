import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";
import BasketInfo from "../components/BasketInfo";

const Basket = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="container p-4">
      <h1 className="mb-4 fs-1">Sepetiniz</h1>

      <div className="d-flex flex-column gap-5">
        {/* 
         1) sepette ürün yoksa: sepeteniz boş yaz
         2) sepette ürün varsa: her bir ürün için ekrana BasketItem bas
        */}
        {basket.length === 0 ? (
          <div className="text-center my-5 lead">
            <p>Sepetiniz boş</p>

            <Link to="/">Ürünler'e Git</Link>
          </div>
        ) : (
          basket.map((item) => <BasketItem key={item.id} item={item} />)
        )}
      </div>

      <BasketInfo />
    </div>
  );
};

export default Basket;
