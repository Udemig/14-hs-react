"use client";

import { clearBasket } from "@/service/basket-service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ClearButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClear = async () => {
    setLoading(true);

    try {
      await clearBasket();
      router.refresh();
      toast.success("Sepet temizlendi");
    } catch (err) {
      toast.error("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClear}
      disabled={loading}
      className="hover:text-red-800 transition cursor-pointer disabled:cursor-not-allowed disabled:text-gray-500"
    >
      Temizle
    </button>
  );
};

export default ClearButton;
