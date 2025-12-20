import type { FC } from "react";
import { LoaderCircle } from "lucide-react";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center my-20 lg:my-30">
      <LoaderCircle className="text-blue-500 animate-spin" />
    </div>
  );
};

export default Loader;
