import DoughnutGraph from "../graphics/doughnut-graph";

const CategoryChart = () => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full pb-16">
      <h2 className="subtitle">Kategori Grafiği</h2>

      <div className="w-full pt-5">
        <DoughnutGraph />
      </div>
    </div>
  );
};

export default CategoryChart;
