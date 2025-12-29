import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { useUpdateProduct } from "../../service/product";
import Form from "../../components/form";

const Edit: FC = () => {
  const { mutate, isPending } = useUpdateProduct();

  return (
    <div className="max-w-250 mx-auto">
      <Link to="/admin/dashboard" className="text-my-blue flex items-center gap-2 mb-2">
        <ArrowLeft />
        <span>Geri</span>
      </Link>

      <h1 className="text-2xl lg:text-3xl font-semibold mb-5">Ürünü Güncelle</h1>

      <Form />
    </div>
  );
};

export default Edit;
