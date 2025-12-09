import type { FC } from "react";

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-xl font-semibold">Üzgünüz bir sorun oluştu</h2>
      <p className="bg-red-500/10! rounded-lg p-4 border border-red-500/30">
        {message}
      </p>
    </div>
  );
};

export default Error;
