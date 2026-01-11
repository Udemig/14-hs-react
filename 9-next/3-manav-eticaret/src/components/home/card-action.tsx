"use client";

import { addToBasket } from "@/service/basket-service";
import { FC, useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  productId: string;
  stock: number;
}

const CardAction: FC<Props> = ({ productId, stock }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (stock === 0) return;
    setLoading(true);

    addToBasket(productId, 1)
      .then(() => {
        toast.success(`Ürün sepete eklendi`);
        router.refresh();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <button
      disabled={loading || stock === 0}
      onClick={handleClick}
      className="bg-green-500 text-white shadow-md rounded-full p-2 cursor-pointer transition-all hover:bg-green-600 hover:shadow-md disabled:brightness-75"
    >
      {loading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
    </button>
  );
};

export default CardAction;
