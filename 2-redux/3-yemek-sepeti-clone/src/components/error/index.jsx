import { OctagonAlert } from "lucide-react";

const Error = ({ message }) => {
  return (
    <div className="my-20 flex items-center justify-center">
      <div className="surface-card text-center px-8 py-10 flex flex-col items-center gap-4">
        <OctagonAlert className="text-red-500 size-10" />

        <h1 className="text-lg font-semibold">Üzgünüz bir sorun oluştu</h1>

        <h3 className="text-red-500">{message}</h3>
      </div>
    </div>
  );
};

export default Error;
