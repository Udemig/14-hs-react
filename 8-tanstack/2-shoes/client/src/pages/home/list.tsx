import { type FC } from "react";
import { useGetProducts } from "../../service/product";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const List: FC = () => {
  const { isLoading, error, data, refetch } = useGetProducts();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 my-10">
      {data?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default List;
