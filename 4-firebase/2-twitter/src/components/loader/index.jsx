import { FaSpinner } from "react-icons/fa";

const Loader = ({ designs }) => {
  return (
    <div>
      <FaSpinner className={`animate-spin ${designs}`} />
    </div>
  );
};

export default Loader;
