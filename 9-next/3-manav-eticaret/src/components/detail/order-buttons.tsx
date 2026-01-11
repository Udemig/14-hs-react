"use client";

import { addToBasket, checkoutSingleItem } from "@/service/basket-service";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  product: Product;
}

const OrderButtons: FC<Props> = ({ product }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  // sepete ürünü ekle
  const handleAddToBasket = () => {
    if (quantity < 1 || quantity > product.stock) return;
    setLoading(true);

    addToBasket(product._id, quantity)
      .then(() => {
        // sayfayı yenileyerek sepet toplam ürün sayısının artmasını sağla
        router.refresh();
        setQuantity(1);
        toast.success(`${quantity} ${product.unit} ${product.name} sepete eklendi`);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  // hemen satın al butonun tıklanınca
  const handleBuyNow = () => {
    if (quantity < 1 || quantity > product.stock) return;
    setLoading(true);

    checkoutSingleItem(product, quantity)
      .then((data) => {
        setQuantity(1);
        window.location.href = data.url;
      })
      .catch((err) => toast.error(err))
      .finally(() => setLoading(false));
  };

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
        <button disabled={loading} onClick={handleAddToBasket} className="order-button">
          <FaShoppingCart />
          Sepete Ekle
        </button>

        <button
          disabled={loading}
          onClick={handleBuyNow}
          className="order-button bg-green-600 text-white hover:bg-green-700"
        >
          Hemen Satın Al
        </button>
      </div>
    </div>
  );
};

export default OrderButtons;
