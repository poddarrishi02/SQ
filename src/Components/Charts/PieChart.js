import { Doughnut } from "react-chartjs-2";
import { chartColors } from "./colors.js";

const options = {
  legend: {
    position: "right",
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const data = {
  maintainAspectRatio: false,
  responsive: true,
  labels: ["Mid Cap", "Large Cap", "Small Cap"],
  datasets: [
    {
      data: [3.5, 11.5, 2.5],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
};

export default function Pie() {
  return <Doughnut data={data} options={options} />;
}