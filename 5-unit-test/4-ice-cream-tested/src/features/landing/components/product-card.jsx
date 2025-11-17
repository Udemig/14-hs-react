import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToBasket } from "../../../store/basket-slice";

const servingOptions = ["Külah", "Bardakta"];

const ProductCard = ({ product }) => {
  const [serving, setServing] = useState("Külah");
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  console.log(product);

  const handleServingSelect = (option) => {
    setServing(option);
  };

  const handleAddToCart = () => {
    dispatch(
      addToBasket({
        productId: product.id,
        name: product.name,
        price: product.price,
        serving: serving,
        imageUrl: product.imageUrl,
        accent: product.accent,
      })
    );

    toast.success(`${product.name} sepete eklendi! (${serving})`);
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white/90 p-6 text-gray-900 shadow-2xl shadow-rose-900/10 transition hover:-translate-y-1 hover:shadow-rose-900/20">
      <div className="flex justify-center">
        <div
          data-testid="product-image"
          className={`relative flex h-28 w-28 items-center justify-center rounded-3xl bg-linear-to-br ${product.accent}`}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-24 w-24 object-cover drop-shadow-xl"
            loading="lazy"
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold text-gray-900">{product.name}</p>
        <p className="text-sm font-medium text-gray-500">
          ₺{product.price} / {product.unit}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-center text-sm font-semibold text-gray-500">
          Sipariş Tipi Seçin
        </p>
        <div className="flex gap-3">
          {servingOptions.map((option) => (
            <button
              key={option}
              type="button"
              tabIndex="0"
              aria-label={`${product.name} için ${option} seç`}
              aria-pressed={serving === option}
              onClick={() => handleServingSelect(option)}
              className={`flex-1 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                serving === option
                  ? "border-rose-600 bg-rose-600 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-rose-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        tabIndex="0"
        aria-label={`${product.name} sepete ekle`}
        onClick={handleAddToCart}
        disabled={!serving}
        className={`w-full rounded-full px-6 py-3 font-semibold transition ${
          serving
            ? "bg-rose-600 text-white hover:bg-rose-700 active:scale-95 cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
