import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center my-20">
      <LoaderCircle className="text-red-500 animate-spin size-10 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
    </div>
  );
};

export default Loader;
