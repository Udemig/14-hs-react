import { ArrowDown, Bike, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link
      to={`/restaurant/${item.id}`}
      className="surface-card block relative overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1"
    >
      <span className="soft-pill absolute right-4 top-4 bg-white/90 shadow-lg">{item.distance} km</span>

      <img src={item.photo} alt={item.name} className="w-full object-cover h-[230px] lg:h-[200px] rounded-[1.5rem]" />

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl md:text-xl font-semibold">{item.name}</h3>
            <p className="muted-copy mt-1 flex items-center gap-2">
              <ArrowDown className="size-4 text-red-400" /> ₺{item.minPrice} min.
            </p>
          </div>

          <p className="flex items-center gap-2 text-sm font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full">
            <Star className="size-4" />
            {item.rating}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 font-semibold text-zinc-600">
            <Clock className="text-red-400" />
            <span>{item.estimatedDelivery} dk.</span>
          </div>

          {item.isDeliveryFree && (
            <div className="flex items-center gap-2 font-semibold text-zinc-600">
              <Bike className="size-5 text-emerald-500" />
              <span>Ücretsiz teslimat</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
