import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  // sepet verisine abone ol
  const { basket } = useSelector((store) => store.basket);

  // ekrana basılan ürün sepette varsa onu bul
  const basketItem = basket.find((item) => item.id === product.id);

  // + butonuna tıklanınca
  const handleAdd = () => {
    basketItem // ürün sepette varsa miktarını arttır
      ? dispatch(updateItem(basketItem.id, basketItem.amount + 1))
      : // ürün sepette yoksa ürünü oluştur
        dispatch(createItem(product));
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="text-zinc-700 my-1">{product.desc}</p>
        </div>
        <p className="text-lg font-semibold">{product.price}₺</p>
      </div>

      <div className="relative">
        <img src={product.photo} alt={product.title} className="rounded-md object-cover size-full" />

        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center hover:bg-red-100 transition cursor-pointer font-bold"
        >
          {basketItem ? basketItem.amount : <Plus />}
        </button>
      </div>
    </div>
  );
};

export default Card;
