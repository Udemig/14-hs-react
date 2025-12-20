import type { FC } from "react";
import type { Place } from "../../types";
import { Link } from "react-router-dom";
import Status from "./status";
import { MapPin } from "lucide-react";
import Rating from "./rating";

interface Props {
  place: Place;
}

const Card: FC<Props> = ({ place }) => {
  return (
    <Link
      to={`/place/${place.id}`}
      className="border border-zinc-200 rounded-xl p-5 gap-5 grid grid-cols-3 min-h-[300px] bg-white card-hover group overflow-hidden"
    >
      {/* Resim */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={place.image_url}
          alt={place.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* İçerik */}
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start gap-2">
            <h1 className="text-lg font-bold text-zinc-800 group-hover:text-blue-600 transition-colors duration-300">
              {place.name}
            </h1>

            <Status availability={place.availability} />
          </div>

          <p className="text-zinc-600 flex items-center gap-1">
            <MapPin className="size-4" />
            {place.location}
          </p>

          <div className="flex gap-2 mb-2 flex-wrap">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span
                key={key}
                className="border border-blue-200 bg-blue-50 text-blue-700 py-1.5 px-3 rounded-lg text-sm font-medium whitespace-nowrap"
              >
                {i}
              </span>
            ))}
          </div>

          <Rating rating={place.rating} />
        </div>

        {/* Fiyat */}
        <div className="flex flex-col items-end">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold bg-linear-to-r from-blue-600 to-blue-500 bg-clip">
              ${place.price_per_night}
            </span>
            <span className="text-sm text-zinc-500">/gece</span>
          </div>
          <span className="text-xs text-zinc-400">
            vergiler ve ücretler dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
