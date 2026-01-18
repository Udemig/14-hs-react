import { getProducts } from "@/utils/service";
import DoughnutGraph from "../graphics/doughnut-graph";
import { GraphData } from "@/types";

const CategoryChart = async () => {
  const products = await getProducts();

  // kategori başına ürün sayısını hesapla
  const countObj: Record<string, number> = {};

  products.forEach((product) => {
    countObj[product.category] = (countObj[product.category] || 0) + 1;
  });

  // grafik verisini hazırla
  const data: GraphData = {
    labels: Object.keys(countObj),
    datasets: [
      {
        label: "Ürün Sayısı",
        data: Object.values(countObj),
        backgroundColor: [
          "#6366f1", // İndigo
          "#8b5cf6", // Mor
          "#ec4899", // Pembe
          "#14b8a6", // Teal
          "#f59e0b", // Amber
          "#06b6d4", // Cyan
        ],
        borderColor: "white",
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full pb-16">
      <h2 className="subtitle">Kategori Grafiği</h2>

      <div className="size-full pt-5">
        <DoughnutGraph data={data} />
      </div>
    </div>
  );
};

export default CategoryChart;
