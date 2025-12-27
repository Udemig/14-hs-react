import { LoaderCircle } from "lucide-react";
import type { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="h-full flex justify-center items-center my-40">
      <LoaderCircle className="animate-spin text-my-blue size-8" />
    </div>
  );
};

export default Loader;
