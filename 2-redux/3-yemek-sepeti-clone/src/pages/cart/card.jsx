import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../redux/actions/basketActions";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };

  const handleMinus = () => {
    dispatch(updateItem(product.id, product.amount - 1));
  };

  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className="surface-card mb-6 flex gap-4 p-4">
      <img src={product.photo} alt={product.title} className="size-[110px] rounded-2xl object-cover" />

      <div className="w-full flex flex-col gap-4">
        <Link
          to={`/restaurant/${product.restaurantId}`}
          className="text-xl font-semibold text-red-500 hover:underline decoration-2"
        >
          {product.title}
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-semibold text-red-500">{product.price}₺</p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-red-100 bg-red-50/70 px-2">
              <button
                onClick={handleMinus}
                disabled={product.amount === 1}
                className="p-2 text-red-500 transition hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus className="size-4" />
              </button>

              <span className="text-lg font-semibold">{product.amount}</span>

              <button onClick={handleAdd} className="p-2 text-red-500 transition hover:text-red-600">
                <Plus className="size-4" />
              </button>
            </div>
            <button
              onClick={handleRemove}
              className="rounded-full border border-red-100 p-2 text-red-400 transition hover:bg-red-50 hover:text-red-600"
            >
              <Trash className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
