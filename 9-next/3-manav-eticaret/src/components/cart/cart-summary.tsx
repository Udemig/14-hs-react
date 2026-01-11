import { Cart } from "@/types";
import Link from "next/link";
import { FC } from "react";
import CheckoutButton from "./checkout-button";

interface Props {
  cart: Cart;
}

const CartSummary: FC<Props> = ({ cart }) => {
  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6 sticky mt-4">
      <h2 className="font-semibold">Sipariş Özeti</h2>

      <div className="space-y-3 mt-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Ürünler Toplamı</span>
          <span className="font-semibold text-lg text-green-600">{total} ₺</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Kargo</span>
          <span className="font-semibold ">Bedava</span>
        </div>

        <div className="h-0.5 bg-gray-200 my-3" />

        <div className="flex justify-between text-gray-600">
          <span>Toplam</span>
          <span className="font-semibold text-lg text-green-600">{total} ₺</span>
        </div>
      </div>

      <CheckoutButton />

      <Link href="/" className="block text-center mt-4 text-green-600 hover:underline">
        Alışverişe Devam Et
      </Link>
    </div>
  );
};

export default CartSummary;
