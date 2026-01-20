import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const TableWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="max-sm:w-[80vw] overflow-x-auto">
      <table className="border shadow w-full bg-white rounded-md mt-5 border-zinc-300 z-0">{children}</table>
    </div>
  );
};

export default TableWrapper;
