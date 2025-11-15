import { useState } from "react";

const servingOptions = ["Külah", "Bardakta"];

const ProductCard = ({ product }) => {
  const [serving, setServing] = useState("Külah");

  if (!product) {
    return null;
  }

  const handleServingSelect = (option) => {
    setServing(option);
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white/90 p-6 text-gray-900 shadow-2xl shadow-rose-900/10 transition hover:-translate-y-1 hover:shadow-rose-900/20">
      <div className="flex justify-center">
        <div
          className={`relative flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br ${product.accent}`}
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
              className={`flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition class:is-selected:bg-rose-600 class:is-selected:text-white class:is-selected:border-rose-600 ${
                serving === option ? "is-selected" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
