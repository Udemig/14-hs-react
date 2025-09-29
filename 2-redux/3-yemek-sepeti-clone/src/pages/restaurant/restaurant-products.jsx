import { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Flame } from "lucide-react";
import Card from "./card";

const RestaurantProducts = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Flame className="text-red-500 size-7" />
        Popüler
      </h2>

      <p className="text-zinc-700">Restoranın en çok tercih edilen ürünleri</p>

      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantProducts;
