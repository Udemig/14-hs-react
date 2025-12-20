import type { FC } from "react";

interface Props {
  message: string;
  refetch: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  return (
    <div className="my-10 lg:my-30">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="text-2xl font-bold">Üzgünüz bir hata oluştu</h1>

        <p className="text-red-500">{message}</p>

        <button
          onClick={refetch}
          className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-600"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
