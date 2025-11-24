import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "./card";
import OrderInfo from "./order-info";
import BasketEmpty from "./basket-empty";

const Cart = () => {
  const { isLoading, error, basket } = useSelector((store) => store.basket);

  return (
    <div className="container space-y-6">
      <div>
        <p className="soft-pill bg-white/80 w-fit">Siparişiniz</p>
        <h1 className="text-3xl font-bold mt-3">Sepet</h1>
        <p className="muted-copy mt-1">Eklediğiniz ürünleri düzenleyin ve teslimata hazırlanın.</p>
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : basket.length === 0 ? (
            <BasketEmpty />
          ) : (
            basket.map((item) => <Card key={item.id} product={item} />)
          )}
        </div>

        <OrderInfo basket={basket} />
      </div>
    </div>
  );
};

export default Cart;
