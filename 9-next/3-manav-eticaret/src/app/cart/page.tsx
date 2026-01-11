import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import ClearButton from "@/components/cart/clear-button";
import { getBasket } from "@/service/basket-service";
import Link from "next/link";

const Page = async () => {
  const { cart } = await getBasket();

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Alışveriş Sepeti</h1>

      <div className={cart.items.length === 0 ? "flex flex-col" : "lg:flex gap-6"}>
        <div className={cart.items.length === 0 ? "lg:3/3" : "lg:w-2/3"}>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Sepetiniz ({cart.items.length})</h2>

              <ClearButton />
            </div>

            <ul>
              {cart.items.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {cart.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow mt-4 p-6 space-y-5 flex flex-col items-center lg:w-3/3">
            <h4 className="font-semibold text-lg text-zinc-800">Sepete henüz ürün eklemediniz</h4>
            <Link href="/" className="text-green-600 hover:underline">
              Ürünlere Göz Atın
            </Link>
          </div>
        ) : (
          <div className="lg:w-1/3">
            <CartSummary cart={cart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
