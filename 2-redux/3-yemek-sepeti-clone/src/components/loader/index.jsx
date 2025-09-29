import { LoaderCircle } from "lucide-react";

const Loader = ({ designs }) => {
  return (
    <div className={`flex items-center justify-center my-20 ${designs}`}>
      <LoaderCircle className="animate-spin text-red-500 text-xl" />
    </div>
  );
};

export default Loader;
