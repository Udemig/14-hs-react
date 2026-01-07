import Link from "next/link";
import { FC } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import SearchForm from "./search-form";

const Header: FC = () => {
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

        <Link href="/orders" className="header-link">
          <FaShoppingCart className="text-2xl" />
          <span className="max-md:hidden">Sepetim</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
