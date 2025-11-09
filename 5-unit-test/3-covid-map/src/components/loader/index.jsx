import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex justify-center col-span-3 py-4 md:p-6">
      <FaSpinner className="animate-spin text-xl text-pink-500" />
    </div>
  );
};

export default Loader;
