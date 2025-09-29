import { CgSpinner } from "react-icons/cg";

const Spinner = ({ designs }) => {
  return (
    <div className={`flex justify-center items-center my-8`}>
      <CgSpinner className="text-3xl text-red-500 animate-spin" />
    </div>
  );
};

export default Spinner;
