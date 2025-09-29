import { Star, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { formatBigNumber, formatPercentage, formatPrice } from "../../utils/helpers";

const CoinCard = ({ coin }) => {
  // fiyat değişilikliği pozitif mi?
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <Link
      to={`/coin/${coin.id}`}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 cursor-pointer hover:scale-105 transform transition"
    >
      {/* Üst Kısım */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="relative">
            <img src={coin.image} alt={coin.name} className="size-12 rounded-full" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs size-6 rounded-full flex items-center justify-center font-bold">
              {coin.market_cap_rank}
            </span>
          </div>

          {/* İsim */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{coin.symbol}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-[150px]">{coin.name}</p>
          </div>
        </div>

        {/* Favori */}
        <button className="p-2 rounded-full transition">
          <Star className="size-5" />
        </button>
      </div>

      {/*
       * Coin Bilgileri
       */}
      <div className="space-y-3">
        <div className="flex-center">
          <span className="card-label">Fiyat</span>
          <p className="card-value text-xl font-bold">{formatPrice(coin.current_price)}</p>
        </div>

        <div className="flex-center">
          <span className="card-label">24s Değişim (%)</span>
          <p
            className={`card-value font-semibold flex items-center space-x-1 ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
            {formatPercentage(coin.price_change_percentage_24h)}
          </p>
        </div>

        <div className="flex-center">
          <span className="card-label">Market Cap</span>
          <p className="card-value font-semibold">{formatBigNumber(coin.market_cap)}</p>
        </div>
        <div className="flex-center">
          <span className="card-label">24s Hacim</span>
          <p className="card-value text-sm">{formatBigNumber(coin.total_volume)}</p>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>#{coin.market_cap_rank}</span>
        <span>
          {new Date(coin.last_updated).toLocaleDateString("tr", {
            day: "2-digit",
            month: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </Link>
  );
};

export default CoinCard;
