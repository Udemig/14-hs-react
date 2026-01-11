"use client";

import { checkoutBasket } from "@/service/basket-service";
import { useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const CheckoutButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      // sepetteki ürünlerin satın alım oturumunu oluştur
      const data = await checkoutBasket();

      // kullanıcıyı backendin gönderdiği url'e yönlendir
      window.location.href = data.url;
    } catch (error) {
      toast.error("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleCheckout}
      className="flex items-center cursor-pointer justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700 transition disabled:brightness-75 disabled:cursor-not-allowed"
    >
      {loading ? <FaSpinner className="animate-spin" /> : <MdOutlineShoppingCartCheckout />}
      Ödeme Yap
    </button>
  );
};

export default CheckoutButton;
