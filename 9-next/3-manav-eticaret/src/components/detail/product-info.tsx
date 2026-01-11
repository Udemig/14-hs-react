import { Product } from "@/types";
import { FC } from "react";

interface Props {
  product: Product;
}

const ProductInfo: FC<Props> = ({ product }) => {
  const info = [
    { title: "Kategori", value: product.category },
    { title: "Menşei", value: product.origin },
    { title: "Tazelik", value: `${product.expiryDays} gün` },
    { title: "Organik", value: product.isOrganic ? "Evet" : "Hayır" },
    { title: "Birim", value: product.unit },
    { title: "Stok", value: product.stock },
  ];

  return (
    <div className="p-6 border-t border-gray-200">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Ürün Bilgileri</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {info.map((item, key) => (
          <div key={key} className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-sm text-gray-500">{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
