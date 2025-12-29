import type { FC } from "react";
import type { Product } from "../../types";

interface Props {
  product: Product;
  designs?: string;
}

const Price: FC<Props> = ({ product, designs }) => {
  let price = product.price;

  // indirim varsa indirimli fiyatı hesapla
  if (product.discount) {
    price = (product.price * (100 - product.discount)) / 100;
  }

  return (
    <div className={`${product.discount > 0 ? "text-my-yellow" : "text-white"} ${designs}`}>${price.toFixed(2)}</div>
  );
};

export default Price;
