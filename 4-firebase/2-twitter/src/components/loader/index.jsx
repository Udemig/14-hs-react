import { FaSpinner } from "react-icons/fa";

const Loader = ({ designs }) => {
  return (
    <div>
      <FaSpinner className={`animate-spin mx-auto ${designs}`} />
    </div>
  );
};

export default Loader;
