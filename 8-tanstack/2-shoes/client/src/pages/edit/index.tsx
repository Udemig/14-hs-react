import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProduct, useUpdateProduct } from "../../service/product";
import Form from "../../components/form";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Edit: FC = () => {
  const { mutate, isPending } = useUpdateProduct();

  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useGetProduct(id);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} />;

  return (
    <div className="max-w-250 mx-auto">
      <Link
        to="/admin/dashboard"
        className="text-my-blue flex items-center gap-2 mb-2"
      >
        <ArrowLeft />
        <span>Geri</span>
      </Link>

      <h1 className="text-2xl lg:text-3xl font-semibold mb-5">
        Ürünü Güncelle
      </h1>

      <Form mutate={mutate} isPending={isPending} data={data} />
    </div>
  );
};

export default Edit;
