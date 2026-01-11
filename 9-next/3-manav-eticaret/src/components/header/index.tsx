import Link from "next/link";
import { FC } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import SearchForm from "./search-form";
import { getBasket } from "@/service/basket-service";

const Header: FC = async () => {
  // sepetteki ürünleri al
  const { cart } = await getBasket();

  // toplam ürün sayısını hesapla
  const totalAmount = cart.items.reduce<number>((acc, item) => acc + item.quantity, 0);

  return (
    <header className="stick top-0 z-10 bg-white flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
      <Link href="/" className="text-green-600 font-bold text-2xl lg:text-3xl flex items-center gap-2">
        <MdOutlineLocalGroceryStore />
        <span>MANAV</span>
      </Link>

      <SearchForm />

      <div className="flex items-center gap-5">
        <Link href="/orders" className="header-link">
          <RiFileList3Line className="text-2xl" />
          <span className="max-md:hidden">Siparişlerim</span>
        </Link>

        <Link href="/cart" className="header-link">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -right-3.75 -top-5 shadow font-bold text-sm text-shadow-xl bg-green-500 text-white rounded-full size-6 grid place-items-center">
              {totalAmount}
            </span>
          </div>

          <span className="max-md:hidden">Sepetim</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
