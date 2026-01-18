"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const Delete: FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = async () => {
    if (!confirm("Bu ürünü silmek istediğinizden emin misiniz?")) return;

    try {
      setLoading(true);
      await deleteProduct(id);
      router.refresh();
      toast.success("Ürün başarıyla silindi");
    } catch (error) {
      toast.error("Silme işlemi başarısız");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleClick}
      className="flex-1 bg-red-50 text-red-600 px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-100 transition text-center border border-red-200 hover:border-red-300 cursor-pointer"
    >
      {loading ? "Siliniyor..." : "Sil"}
    </button>
  );
};

export default Delete;
