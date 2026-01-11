"use client";

import { Product } from "@/types";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

interface Props {
  product: Product;
}

const OrderButtons: FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div>
      {/* Miktar Seçimi */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button className="counter-button" onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
            <FaMinus />
          </button>

          <span className="px-3 py-2 border-x border-gray-300 min-w-10 text-center">{quantity}</span>

          <button
            className="counter-button"
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity === product.stock}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Butonlar */}
      <div className="flex items-center gap-3 mt-4">
        <button className="order-button">
          <FaShoppingCart />
          Sepete Ekle
        </button>

        <button className="order-button bg-green-600 text-white hover:bg-green-700">Hemen Satın Al</button>
      </div>
    </div>
  );
};

export default OrderButtons;
