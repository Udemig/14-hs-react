import { Product } from "@/types";
import Image from "next/image";
import { FC } from "react";
import OrganicBadge from "./organic-badge";
import { TbWeight } from "react-icons/tb";
import CardAction from "./card-action";
import Link from "next/link";

interface Props {
  product: Product;
}

const Card: FC<Props> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden bg-white">
      <Link href={`/grocery/${product._id}`} className="relative w-full overflow-hidden">
        <Image src={product.photo} width={300} height={300} alt={product.name} className="object-cover mx-auto" />
        <OrganicBadge isOrganic={product.isOrganic} />
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <span className="text-sm text-gray-600">{product.origin}</span>
          </div>

          <p className="flex items-center gap-1 text-xs bg-gray-200 px-2 py-1 rounded">
            <TbWeight />
            {product.unit}
          </p>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 h-10 mb-3">{product.description}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-green-700 font-bold text-2xl">{product.price} ₺</p>

          <CardAction productId={product._id} stock={product.stock} />
        </div>
      </div>
    </div>
  );
};

export default Card;
