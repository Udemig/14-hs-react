import { LoaderCircle } from "lucide-react";

const ChartLoader = () => {
  return (
    <div className="h-80 flex items-center justify-between w-full">
      <div className="flex flex-col items-center justify-center w-full gap-1">
        <LoaderCircle className="text-blue-600 animate-spin size-8" />{" "}
        <p className="text-gray-600 dark:text-gray-400">Grafik yükleniyor...</p>
      </div>
    </div>
  );
};

export default ChartLoader;
