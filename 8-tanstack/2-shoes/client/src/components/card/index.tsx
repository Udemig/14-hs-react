import type { FC } from "react";
import type { Product } from "../../types";

interface Props {
  product: Product;
}

const Card: FC<Props> = ({ product }) => {
  return (
    <div>
      <h1 className="text-2xl">{product.name}</h1>
    </div>
  );
};

export default Card;
