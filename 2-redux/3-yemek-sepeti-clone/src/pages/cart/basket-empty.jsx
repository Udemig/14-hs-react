import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const BasketEmpty = () => {
  return (
    <div className="flex flex-col items-center gap-5 my-10">
      <ShoppingCart />

      <h1 className="text-2xl font-bold">Sepetiniz Boş</h1>

      <p className="text-zinc-700 text-lg">Henüz sepete bir ürün eklemediniz.</p>

      <Link to="/" className="text-blue-500 hover:underline">
        Restoran'lara Gözat
      </Link>
    </div>
  );
};

export default BasketEmpty;
