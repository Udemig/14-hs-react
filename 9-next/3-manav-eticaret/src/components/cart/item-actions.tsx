"use client";

import { updateQuantity, removeFromBasket } from "@/service/basket-service";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  item: {
    grocery: Product;
    name: string;
    price: number;
    quantity: number;
    _id: string;
  };
}

const ItemActions: FC<Props> = ({ item }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleQuantity = async (newQuantity: number) => {
    setLoading(true);

    try {
      await updateQuantity(item.grocery._id, newQuantity);
      router.refresh();
    } catch (error) {
      toast.error("İşlem başarısız");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async () => {
    setLoading(true);

    try {
      await removeFromBasket(item.grocery._id);
      router.refresh();
    } catch (err) {
      toast.error("Ürün sepetten kaldırılmadı");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded-md mr-4">
        <button
          disabled={loading || item.quantity === 1}
          onClick={() => handleQuantity(item.quantity - 1)}
          className="counter-button"
        >
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-9 text-center">{item.quantity}</span>

        <button
          disabled={loading || item.quantity === item.grocery.stock}
          onClick={() => handleQuantity(item.quantity + 1)}
          className="counter-button"
        >
          <FaPlus />
        </button>
      </div>

      <button
        onClick={handleRemove}
        className="text-red-600 hover:text-red-700 cursor-pointer disabled:opacity-50 transition"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
