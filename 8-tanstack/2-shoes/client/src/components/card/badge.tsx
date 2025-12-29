import type { FC } from "react";
import type { Product } from "../../types";

interface Props {
  product: Product;
}

const Badge: FC<Props> = ({ product }) => {
  if (product.discount < 0 || !product.isNew) return;

  return (
    <div
      className={`absolute text-white rounded rounded-tl-xl px-2 py-1 lg:px-4 rounded-br-xl lg:rounded-tl-3xl lg:rounded-br-3xl ${
        product.discount > 0 ? "bg-my-yellow" : "bg-my-blue"
      }`}
    >
      {product.discount > 0 ? `${product.discount}%` : "Yeni"}
    </div>
  );
};

export default Badge;
