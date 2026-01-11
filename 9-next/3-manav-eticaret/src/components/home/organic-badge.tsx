import { FC } from "react";
import { FaLeaf } from "react-icons/fa";

interface Props {
  isOrganic: boolean;
}

const OrganicBadge: FC<Props> = ({ isOrganic }) => {
  if (!isOrganic) return null;

  return (
    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs py-1 px-2 rounded-full flex items-center gap-1">
      <FaLeaf />
      <span>Organik</span>
    </div>
  );
};

export default OrganicBadge;
