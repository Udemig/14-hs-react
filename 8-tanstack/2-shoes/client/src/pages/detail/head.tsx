import type { FC } from "react";
import type { Product } from "../../types";
import Badge from "../../components/card/badge";
import Price from "../../components/card/price";

interface Props {
  product: Product;
}

const Head: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <Badge product={product} />

      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-13.75">{product.name}</h1>

      <div className="text-2xl flex gap-1">
        <Price product={product} designs="text-my-blue!" />

        {product.discount > 0 && <span className="line-through ps-3">{product.price.toFixed(2)}</span>}
      </div>
    </div>
  );
};

export default Head;
