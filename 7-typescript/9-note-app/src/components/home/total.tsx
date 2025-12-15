import type { FC } from "react";

interface Props {
  filtredCount: number;
  totalCount: number;
}

const Total: FC<Props> = ({ filtredCount, totalCount }) => {
  return (
    <div className="mt-8 text-text-secondary text-sm flex justify-between">
      <div>
        <span className="text-text-primary">{filtredCount}</span> not
        gösteriliyor, toplam{" "}
        <span className="text-text-primary">({totalCount})</span>
      </div>
    </div>
  );
};

export default Total;
