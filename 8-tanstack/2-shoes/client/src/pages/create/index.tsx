import type { FC } from "react";
import Form from "../../components/form";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCreateProduct } from "../../service/product";

const Create: FC = () => {
  const { isPending, mutate } = useCreateProduct();

  return (
    <div className="max-w-250 mx-auto">
      <Link to="/admin/dashboard" className="text-my-blue flex items-center gap-2 mb-2">
        <ArrowLeft />
        <span>Geri</span>
      </Link>

      <h1 className="text-2xl lg:text-3xl font-semibold mb-5">Yeni Ürün Oluştur</h1>

      <Form />
    </div>
  );
};

export default Create;
