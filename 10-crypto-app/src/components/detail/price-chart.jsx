import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { formatDate, formatPrice } from "../../utils/helpers";
import { useTheme } from "../../context/theme-context";

const PriceChart = ({ symbol, days, priceHistory }) => {
  const { isDarkMode } = useTheme();

  // fiyat değişikliğini hesapla
  const firstPrice = priceHistory[0]?.price || 0;
  const lastPrice = priceHistory.at(-1)?.price || 0;
  const isPositive = lastPrice >= firstPrice;

  // renkleri belirle
  const borderColor = isPositive ? "#16a34a" : "#dc2626";
  const backgroundColor = isPositive ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)";

  const data = {
    labels: priceHistory.map((item) => formatDate(days, item.timestamp)),
    datasets: [
      {
        label: `${symbol} Fiyat`,
        data: priceHistory.map((item) => item.price),
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        fill: true,
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: borderColor,
        pointHoverBorderColor: "#ffffff",
      },
    ],
  };

  const textColor = isDarkMode ? "#e5e7eb" : "#374151";
  const gridColor = isDarkMode ? "#374151" : "#e5e7eb";

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${symbol} Fiyat Geçmişi (${days} gün)`,
        color: textColor,
        font: {
          size: 16,
          weight: "bold",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
        titleColor: textColor,
        bodyColor: textColor,
        borderColor: isDarkMode ? "#374151" : "#e5e7eb",
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            return `Fiyat: $${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6,
            })}`;
          },
        },
      },
    },

    scales: {
      x: {
        display: true,
        grid: {
          color: gridColor,
          borderColor: gridColor,
        },
        ticks: {
          color: textColor,
          maxTicksLimit: 20,
        },
      },
      y: {
        display: true,
        grid: {
          color: gridColor,
          borderColor: gridColor,
        },
        ticks: {
          color: textColor,
          callback: function (value) {
            return formatPrice(value);
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    elements: {
      point: {
        hoverRadius: 8,
      },
    },
  };

  return (
    <div className="h-80 w-full">
      <Line options={options} data={data} />
    </div>
  );
};

export default PriceChart;
