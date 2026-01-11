import { Product } from "@/types";
import Image from "next/image";
import { FC } from "react";
import OrganicBadge from "../home/organic-badge";
import { TbWeight } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import OrderButtons from "./order-buttons";

interface Props {
  product: Product;
}

const ProductDetails: FC<Props> = ({ product }) => {
  return (
    <div className="md:flex">
      {/* Resim */}
      <div className="relative w-full md:w-1/2">
        <Image src={product.photo} alt={product.name} width={400} height={400} className="object-cover mx-auto" />

        <OrganicBadge isOrganic={product.isOrganic} />
      </div>

      {/* Detaylar */}
      <div className="md:w-1/2 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600">{product.origin}</p>
          </div>

          <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-gray-700">
            <TbWeight />
            <span>{product.unit}</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-3xl font-bold text-green-600">{product.price} ₺</p>
          <p className="text-gray-500">KDV Dahil</p>
        </div>

        <div className="my-6 h-px bg-gray-200" />

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <MdOutlineLocalShipping className="text-xl text-green-600" />
            <span>Aynı gün teslimat imkanı</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaShoppingBasket className="text-xl text-green-600" />
            <span>
              Stok Durumu: <b>{product.stock}</b> {product.unit}
            </span>
          </div>

          <div className="text-gray-700 mt-4">
            <h3 className="font-semibold mb-1">Beslenmde Değerleri</h3>

            <p>{product.nutritionalValue}</p>
          </div>
        </div>

        <OrderButtons product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
