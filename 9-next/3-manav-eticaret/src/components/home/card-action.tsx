import { FC } from "react";
import { FaPlus } from "react-icons/fa";

interface Props {
  productId: string;
}

const CardAction: FC<Props> = ({ productId }) => {
  return (
    <button className="bg-green-500 text-white shadow-md rounded-full p-2 cursor-pointer transition-all hover:bg-green-600 hover:shadow-md disabled:brightness-75">
      <FaPlus />
    </button>
  );
};

export default CardAction;
