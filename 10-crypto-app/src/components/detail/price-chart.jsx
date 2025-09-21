import { Line } from "react-chartjs-2";
import "chart.js/auto";

const PriceChart = () => {
  const labels = ["OcaK", "Şubat", "Mart", "April", "May", "June", "July", "x"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 200, 400, 250, 90, 899, 356, 100],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default PriceChart;
