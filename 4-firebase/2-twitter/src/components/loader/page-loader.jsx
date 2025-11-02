import { FaSpinner } from "react-icons/fa";

const PageLoader = () => {
  return (
    <div className="h-screen bg-black grid place-items-center">
      <FaSpinner className="text-white animate-spin text-xl" />
    </div>
  );
};

export default PageLoader;
