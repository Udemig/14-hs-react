import List from "@/components/products/list";
import Link from "next/link";
import { FC, Suspense } from "react";
import { BiPlus } from "react-icons/bi";
import Loading from "../loading";

const Page: FC = async () => {
  return (
    <div className="page">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="title">Ürünler</h1>
            <p className="text-gray-600">Tüm ürünlerinizi yönetin</p>
          </div>

          <Link
            href="/products/create"
            className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl text-white px-4 py-2 font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-400"
          >
            <BiPlus className="text-2xl" />
            Yeni Ürün Ekle
          </Link>
        </div>

        {/* Ürün Listesi */}
        <Suspense fallback={<Loading styles="my-40" />}>
          <List />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
