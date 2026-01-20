import { FC } from "react";
import { FaSpinner } from "react-icons/fa";

interface Props {
  styles?: string;
}

const Loading: FC<Props> = ({ styles }) => {
  return (
    <div className={`flex justify-center items-center h-full ${styles}`}>
      <FaSpinner className="text-2xl animate-spin text-blue-500" />
    </div>
  );
};

export default Loading;
