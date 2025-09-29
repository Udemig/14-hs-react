import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const BasketInfo = () => {
  const { basket, clearCart } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);

  return (
    <div className="border p-4 rounded my-5 fs-4">
      <p className="d-flex gap-3">
        <span>Ürün Adedi:</span>
        <b className="text-warning">{totalAmount}</b>
      </p>

      <p className="d-flex gap-3">
        <span>Toplam Fiyat:</span>
        <b className="text-success">${totalPrice.toFixed(2)}</b>
      </p>

      <button disabled={basket.length === 0} onClick={clearCart} className="w-100 fs-6">
        Ödeme Yap
      </button>
    </div>
  );
};

export default BasketInfo;
