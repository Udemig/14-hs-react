import { LoaderCircle } from "lucide-react";

const Loader = ({ designs }) => {
  return (
    <div className={`flex items-center justify-center my-20 ${designs}`}>
      <div className="surface-card inline-flex items-center gap-3 px-6 py-3">
        <LoaderCircle className="size-8 animate-spin text-red-500" />
        <span className="font-semibold text-sm text-zinc-600">Yükleniyor...</span>
      </div>
    </div>
  );
};

export default Loader;
