import { RefreshCw, TrendingUp } from "lucide-react";

const InfoList = ({ total, lastUpdate }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Toplam Coin</p>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{total}</div>
        </div>

        <TrendingUp className="size-8 text-blue-500" />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Son Güncelleme</p>
          <div className="text-lg font-bold text-gray-900 dark:text-white">{lastUpdate}</div>
        </div>

        <RefreshCw className="size-8 text-green-500" />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Durum</p>
          <div className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <div className="size-2 bg-green-500 rounded-full animate-pulse" />
            <span>Canlı</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoList;
