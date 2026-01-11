import { FC } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loading: FC = () => {
  return (
    <div className="my-20 flex justify-center">
      <BiLoaderAlt className="text-green-500 text-3xl animate-spin" />
    </div>
  );
};

export default Loading;
