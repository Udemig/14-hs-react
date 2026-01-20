"use client";

import { deleteUser } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const BanButton: FC<Props> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // butona tıklanınca
  const handleClick = () => {
    if (!confirm("Bu kullanıcıyı kaldırma istediğinizden emin misiniz ?")) return;

    setIsLoading(true);

    deleteUser(id)
      .then(() => {
        toast.success("Kullanıcı engellendi");
        router.refresh();
      })
      .catch(() => {
        toast.error("İşlem başarısız");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      className="button hover:bg-red-200 cursor-pointer border border-red-500 disabled:cursor-not-allowed disabled:brightness-75"
    >
      <BsTrash className="text-base text-red-500" />
    </button>
  );
};

export default BanButton;
