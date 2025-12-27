import { AlertCircle } from "lucide-react";
import type { FC } from "react";

interface Props {
  message: string;
  refetch?: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  return (
    <div className="flex flex-col items-center justify-center my-30 gap-4">
      <AlertCircle className="size-10 text-red-500" />
      <h1 className="text-2xl font-semibold">Üzgünüz, bir hata oluştu</h1>
      <p className="font-semibold">{message}</p>

      {refetch && (
        <button
          onClick={refetch}
          className="px-4 py-1 border border-dark-grey rounded-md text-dark-grey hover:bg-dark-grey hover:text-white transition cursor-pointer"
        >
          Tekrar Dene
        </button>
      )}
    </div>
  );
};

export default Error;
