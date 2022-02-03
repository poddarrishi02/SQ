//barchart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    //   title: {
    //     display: true,
    //     text: 'Chart.js Horizontal Bar Chart',
    //   },
  },
};
const state = {
  labels: [
    "Momentum",
    "Momentum",
    "Momentum",
    "Momentum",
    "Momentum",
    "Momentum",
    "Momentum",
  ],
  datasets: [
    {
      label: "Dataset 3",
      data: [20, 30, 40, 50, 60 ,70, 80],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function HorizontalChart() {
  return <Bar data={state} options={options} />;
}
