import { LoaderCircle } from "lucide-react";

const Loader = ({ designs }) => {
  return (
    <div className={`flex justify-center my-[200px] ${designs}`}>
      <LoaderCircle className="animate-spin text-blue-500 size-8" />
    </div>
  );
};

export default Loader;
