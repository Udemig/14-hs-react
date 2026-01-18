import { FC } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  value: number;
}

const Rating: FC<Props> = ({ value }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((i, key) => {
        const full = Math.floor(value);
        const hasHalf = value % 1 >= 0.5;

        // tam yıldız
        if (key < full) {
          return <FaStar key={key} className="size-5 fill-yellow-500" />;
        }

        // yarım yıldız
        if (key === full && hasHalf) {
          return <FaStarHalfAlt className="size-5 fill-yellow-500" />;
        }

        // boş yıldız
        return <FaStar key={key} className="size-5 fill-zinc-500" />;
      })}
    </div>
  );
};

export default Rating;
