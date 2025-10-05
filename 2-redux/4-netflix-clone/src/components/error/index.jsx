import { ShieldAlert } from "lucide-react";

const Error = ({ message }) => {
  return (
    <div className="flex flex-col justify-center gap-4 my-40 backdrop-blur-md bg-red-500/10 border-red-500/30 rounded-3xl p-10 mx-auto max-w-2xl items-center text-center">
      <ShieldAlert className="text-red-500 size-16 drop-shadow-2xl" />

      <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
        Üzgünüz bir sorun oluştu
      </h1>

      <p className="text-gray-300 text-center">{message}</p>
    </div>
  );
};

export default Error;
