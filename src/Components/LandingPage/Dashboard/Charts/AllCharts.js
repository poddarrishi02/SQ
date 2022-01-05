import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import data from "./../../../../assets/All_Data.json";

function AllCharts(props) {
  var line_options = {
    legend: {
      display: false,
    },
    radius: 2,
    scales: {
      y: {
        grid: {
          color: "transparent",
          borderColor: "transparent",
        },
      },
      x: {
        grid: {
          color: "transparent",
          borderColor: "transparent",
        },
      },
    },
  };

  var bar_options = {
    legend: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          color: "transparent",
          borderColor: "transparent",
        },
      },
      x: {
        grid: {
          color: "transparent",
          borderColor: "transparent",
          barThickness: 0.4,
        },
      },
    },
    element: {
      bar: {
        borderWidth: 100,
      },
    },
  };

  var line_data = {
    legend: {
      display: true,
    },
    labels: new Array(data.Historical["1d"].Index.length).fill(""),
    datasets: [
      {
        data: data.Historical["1d"].Data[0],
        fill: false,
        borderColor: ["#9B5DE5"],
        tension: 0.2,
        label: "Momentum"
      },
      {
        data: data.Historical["1d"].Data[1],
        fill: false,
        borderColor: ["#F15BB5"],
        tension: 0.2,
        label: "Value"
      },
      {
        data: data.Historical["1d"].Data[2],
        fill: false,
        borderColor: ["#FFBE0B"],
        tension: 0.2,
        label: "Quality"
      },
      {
        data: data.Historical["1d"].Data[3],
        fill: false,
        borderColor: ["#00BBF9"],
        tension: 0.2,
        label: "Liquidity"
      },
      {
        data: data.Historical["1d"].Data[4],
        fill: false,
        borderColor: ["#00BAA1"],
        tension: 0.2,
        label: "Volatility"
      },
      {
        data: data.Historical["1d"].Data[5],
        fill: false,
        borderColor: ["#F15E81"],
        tension: 0.2,
        label: "Growth"
      },
      {
        data: data.Historical["1d"].Data[6],
        fill: false,
        borderColor: ["#5B92E4"],
        tension: 0.2,
        label: "Size"
      },
    ],
  };
  var line_data1 = {
    labels: new Array(data.Historical["1w"].Index.length).fill(""),
    datasets: [
      {
        data: data.Historical["1w"].Data[0],
        fill: false,
        borderColor: ["#9B5DE5"],
        tension: 0.5,
        label: "Momentum"
      },
      {
        data: data.Historical["1w"].Data[1],
        fill: false,
        borderColor: ["#F15BB5"],
        tension: 0.5,
        label: "Value" 
      },
      {
        data: data.Historical["1w"].Data[2],
        fill: false,
        borderColor: ["#FFBE0B"],
        tension: 0.5,
        label: "Quality" 
      },
      {
        data: data.Historical["1w"].Data[3],
        fill: false,
        borderColor: ["#00BBF9"],
        tension: 0.5,
        label: "Liquidity" 
      },
      {
        data: data.Historical["1w"].Data[4],
        fill: false,
        borderColor: ["#00BAA1"],
        tension: 0.5,
        label: "Volatility"
      },
      {
        data: data.Historical["1w"].Data[5],
        fill: false,
        borderColor: ["#F15E81"],
        tension: 0.5,
        label: "Growth"
      },
      {
        data: data.Historical["1w"].Data[6],
        fill: false,
        borderColor: ["#5B92E4"],
        tension: 0.5,
        label: "Size"
      },
    ],
  };
  var line_data2 = {
    labels: new Array(data.Historical["1m"].Index.length).fill(""),
    datasets: [
      {
        data: data.Historical["1m"].Data[0],
        fill: false,
        borderColor: ["#9B5DE5"],
        tension: 0.5,
        label: "Momentum"
      },
      {
        data: data.Historical["1m"].Data[1],
        fill: false,
        borderColor: ["#F15BB5"],
        tension: 0.5,
        label:"Value"
      },
      {
        data: data.Historical["1m"].Data[2],
        fill: false,
        borderColor: ["#FFBE0B"],
        tension: 0.5,
        label:"Quality"
      },
      {
        data: data.Historical["1m"].Data[3],
        fill: false,
        borderColor: ["#00BBF9"],
        tension: 0.5,
        label:"Liquidity"
      },
      {
        data: data.Historical["1m"].Data[4],
        fill: false,
        borderColor: ["#00BAA1"],
        tension: 0.5,
        label:"Volatility"
      },
      {
        data: data.Historical["1m"].Data[5],
        fill: false,
        borderColor: ["#F15E81"],
        tension: 0.5,
        label:"Growth"
      },
      {
        data: data.Historical["1m"].Data[6],
        fill: false,
        borderColor: ["#5B92E4"],
        tension: 0.5,
        label:"Size"
      },
    ],
  };

  var line_data3 = {
    labels: new Array(data.Historical["3m"].Index.length).fill(""),
    datasets: [
      {
        data: data.Historical["3m"].Data[0],
        fill: false,
        borderColor: ["#9B5DE5"],
        tension: 0.5,
        label:"Momentum"
      },
      {
        data: data.Historical["3m"].Data[1],
        fill: false,
        borderColor: ["#F15BB5"],
        tension: 0.5,
        label:"Value"
      },
      {
        data: data.Historical["3m"].Data[2],
        fill: false,
        borderColor: ["#FFBE0B"],
        tension: 0.5,
        label:"Quality"
      },
      {
        data: data.Historical["3m"].Data[3],
        fill: false,
        borderColor: ["#00BBF9"],
        tension: 0.5,
        label:"Liquidity"
      },
      {
        data: data.Historical["3m"].Data[4],
        fill: false,
        borderColor: ["#00BAA1"],
        tension: 0.5,
        label:"Volatility"
      },
      {
        data: data.Historical["3m"].Data[5],
        fill: false,
        borderColor: ["#F15E81"],
        tension: 0.5,
        label:"Growth"
      },
      {
        data: data.Historical["3m"].Data[6],
        fill: false,
        borderColor: ["#5B92E4"],
        tension: 0.5,
        label:"Size"
      },
    ],
  };
  var line_data4 = {
    labels: new Array(data.Historical["1y"].Index.length).fill(""),
    datasets: [
      {
        data: data.Historical["1y"].Data[0],
        fill: false,
        borderColor: ["#9B5DE5"],
        tension: 0.5,
        label:"Momentum"
      },
      {
        data: data.Historical["1y"].Data[1],
        fill: false,
        borderColor: ["#F15BB5"],
        tension: 0.5,
        label:"Value"
      },
      {
        data: data.Historical["1y"].Data[2],
        fill: false,
        borderColor: ["#FFBE0B"],
        tension: 0.5,
        label:"Quality"
      },
      {
        data: data.Historical["1y"].Data[3],
        fill: false,
        borderColor: ["#00BBF9"],
        tension: 0.5,
        label:"Liquidity"
      },
      {
        data: data.Historical["1y"].Data[4],
        fill: false,
        borderColor: ["#00BAA1"],
        tension: 0.5,
        label:"Volatility"
      },
      {
        data: data.Historical["1y"].Data[5],
        fill: false,
        borderColor: ["#F15E81"],
        tension: 0.5,
        label:"Growth"
      },
      {
        data: data.Historical["1y"].Data[6],
        fill: false,
        borderColor: ["#5B92E4"],
        tension: 0.5,
        label:"Size"
      },
    ],
  };
  var line_data5 = {
    labels: new Array(data.Historical["3y"].Index.length).fill(""),
    datasets: [
      {
        data: data.Historical["3y"].Data[0],
        fill: false,
        borderColor: ["#9B5DE5"],
        tension: 0.5,
        label:"Momentum"
      },
      {
        data: data.Historical["3y"].Data[1],
        fill: false,
        borderColor: ["#F15BB5"],
        tension: 0.5,
        label:"Value"
      },
      {
        data: data.Historical["3y"].Data[2],
        fill: false,
        borderColor: ["#FFBE0B"],
        tension: 0.5,
        label:"Quality"
      },
      {
        data: data.Historical["3y"].Data[3],
        fill: false,
        borderColor: ["#00BBF9"],
        tension: 0.5,
        label:"Liquidity"
      },
      {
        data: data.Historical["3y"].Data[4],
        fill: false,
        borderColor: ["#00BAA1"],
        tension: 0.5,
        label:"Volatility"
      },
      {
        data: data.Historical["3y"].Data[5],
        fill: false,
        borderColor: ["#F15E81"],
        tension: 0.5,
        label:"Growth"
      },
      {
        data: data.Historical["3y"].Data[6],
        fill: false,
        borderColor: ["#5B92E4"],
        tension: 0.5,
        label:"Size"
      },
    ],
  };
  var line_data6 = {
    labels: new Array(data.Historical["5y"].Index.length).fill(""),
    datasets: [
      {
        data: data.Historical["5y"].Data[0],
        fill: false,
        borderColor: ["#9B5DE5"],
        tension: 0.5,
        label:"Momentum"
      },
      {
        data: data.Historical["5y"].Data[1],
        fill: false,
        borderColor: ["#F15BB5"],
        tension: 0.5,
        label:"Value"
      },
      {
        data: data.Historical["5y"].Data[2],
        fill: false,
        borderColor: ["#FFBE0B"],
        tension: 0.5,
        label:"Quality"
      },
      {
        data: data.Historical["5y"].Data[3],
        fill: false,
        borderColor: ["#00BBF9"],
        tension: 0.5,
        label:"Liquidity"
      },
      {
        data: data.Historical["5y"].Data[4],
        fill: false,
        borderColor: ["#00BAA1"],
        tension: 0.5,
        label:"Volatility"
      },
      {
        data: data.Historical["5y"].Data[5],
        fill: false,
        borderColor: ["#F15E81"],
        tension: 0.5,
        label:"Growth"
      },
      {
        data: data.Historical["5y"].Data[6],
        fill: false,
        borderColor: ["#5B92E4"],
        tension: 0.5,
        label:"Size"
      },
    ],
  };

  var bar_data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        barThickness: 60,
        barPercentage: 0.1,
        data: data.Recent["1d"][1],
        label:"Momentum",
        fill: true,
        backgroundColor: [
          "#9B5DE5",
          "#F15BB5",
          "#FFBE0B",
          "#00BBF9",
          "#00BAA1",
          "#F15E81",
          "#5B92E4",
        ],
      },
    ],
  };
  var bar_data1 = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        barThickness: 60,
        barPercentage: 0.1,
        data: data.Recent["1w"][1],
        label:"Momentum",
        fill: true,
        backgroundColor: [
          "#9B5DE5",
          "#F15BB5",
          "#FFBE0B",
          "#00BBF9",
          "#00BAA1",
          "#F15E81",
          "#5B92E4",
        ],
      },
    ],
  };
  var bar_data2 = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        barThickness: 60,
        barPercentage: 0.1,
        data: data.Recent["1m"][1],
        label:"Momentum",
        fill: true,
        backgroundColor: [
          "#9B5DE5",
          "#F15BB5",
          "#FFBE0B",
          "#00BBF9",
          "#00BAA1",
          "#F15E81",
          "#5B92E4",
        ],
      },
    ],
  };
  var bar_data3 = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        barThickness: 60,
        barPercentage: 0.1,
        data: data.Recent["3m"][1],
        label:"Momentum",
        fill: true,
        backgroundColor: [
          "#9B5DE5",
          "#F15BB5",
          "#FFBE0B",
          "#00BBF9",
          "#00BAA1",
          "#F15E81",
          "#5B92E4",
        ],
      },
    ],
  };
  var bar_data4 = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        barThickness: 60,
        barPercentage: 0.1,
        data: data.Recent["1y"][1],
        label:"Momentum",
        fill: true,
        backgroundColor: [
          "#9B5DE5",
          "#F15BB5",
          "#FFBE0B",
          "#00BBF9",
          "#00BAA1",
          "#F15E81",
          "#5B92E4",
        ],
      },
    ],
  };
  var bar_data5 = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        barThickness: 60,
        barPercentage: 0.1,
        data: data.Recent["3y"][1],
        label:"Momentum",
        fill: true,
        backgroundColor: [
          "#9B5DE5",
          "#F15BB5",
          "#FFBE0B",
          "#00BBF9",
          "#00BAA1",
          "#F15E81",
          "#5B92E4",
        ],
      },
    ],
  };
  var bar_data6 = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        barThickness: 60,
        barPercentage: 0.1,
        data: data.Recent["5y"][1],
        label:"Momentum",
        fill: true,
        backgroundColor: [
          "#9B5DE5",
          "#F15BB5",
          "#FFBE0B",
          "#00BBF9",
          "#00BAA1",
          "#F15E81",
          "#5B92E4",
        ],
      },
    ],
  };
  return (
    <>
      {/* --------------------------------------1 day------------------ */}
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 0 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={line_data}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 1 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1d"].Index.length).fill(""),
          datasets: [line_data.datasets[0]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 2 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1d"].Index.length).fill(""),
          datasets: [line_data.datasets[1]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 3 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1d"].Index.length).fill(""),
          datasets: [line_data.datasets[2]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 4 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1d"].Index.length).fill(""),
          datasets: [line_data.datasets[3]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 5 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1d"].Index.length).fill(""),
          datasets: [line_data.datasets[4]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 6 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1d"].Index.length).fill(""),
          datasets: [line_data.datasets[5]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 7 && props.range === 0
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1d"].Index.length).fill(""),
          datasets: [line_data.datasets[6]],
        }}
      />

      {/* -----------------------------------------1 W------------------------------ */}

      <Line
        style={{
          display:
            props.query === 0 && props.menu === 0 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={line_data1}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 1 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1w"].Index.length).fill(""),
          datasets: [line_data1.datasets[0]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 2 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1w"].Index.length).fill(""),
          datasets: [line_data1.datasets[1]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 3 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1w"].Index.length).fill(""),
          datasets: [line_data1.datasets[2]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 4 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1w"].Index.length).fill(""),
          datasets: [line_data1.datasets[3]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 5 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1w"].Index.length).fill(""),
          datasets: [line_data1.datasets[4]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 6 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1w"].Index.length).fill(""),
          datasets: [line_data1.datasets[5]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 7 && props.range === 1
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1w"].Index.length).fill(""),
          datasets: [line_data1.datasets[6]],
        }}
      />
      {/* -----------------------------------------1 M------------------------------ */}
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 0 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={line_data2}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 1 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1m"].Index.length).fill(""),
          datasets: [line_data2.datasets[0]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 2 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1m"].Index.length).fill(""),
          datasets: [line_data2.datasets[1]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 3 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1m"].Index.length).fill(""),
          datasets: [line_data2.datasets[2]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 4 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1m"].Index.length).fill(""),
          datasets: [line_data2.datasets[3]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 5 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1m"].Index.length).fill(""),
          datasets: [line_data2.datasets[4]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 6 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1m"].Index.length).fill(""),
          datasets: [line_data2.datasets[5]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 7 && props.range === 2
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1m"].Index.length).fill(""),
          datasets: [line_data2.datasets[6]],
        }}
      />
      {/* -----------------------------------------3 M------------------------------ */}

      <Line
        style={{
          display:
            props.query === 0 && props.menu === 0 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={line_data3}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 1 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3m"].Index.length).fill(""),
          datasets: [line_data3.datasets[0]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 2 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3m"].Index.length).fill(""),
          datasets: [line_data3.datasets[1]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 3 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3m"].Index.length).fill(""),
          datasets: [line_data3.datasets[2]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 4 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3m"].Index.length).fill(""),
          datasets: [line_data3.datasets[3]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 5 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3m"].Index.length).fill(""),
          datasets: [line_data3.datasets[4]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 6 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3m"].Index.length).fill(""),
          datasets: [line_data3.datasets[5]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 7 && props.range === 3
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3m"].Index.length).fill(""),
          datasets: [line_data3.datasets[6]],
        }}
      />
      {/* -----------------------------------------1 Y------------------------------ */}
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 0 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={line_data4}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 1 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1y"].Index.length).fill(""),
          datasets: [line_data4.datasets[0]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 2 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1y"].Index.length).fill(""),
          datasets: [line_data4.datasets[1]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 3 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1y"].Index.length).fill(""),
          datasets: [line_data4.datasets[2]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 4 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1y"].Index.length).fill(""),
          datasets: [line_data4.datasets[3]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 5 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1y"].Index.length).fill(""),
          datasets: [line_data4.datasets[4]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 6 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1y"].Index.length).fill(""),
          datasets: [line_data4.datasets[5]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 7 && props.range === 4
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["1y"].Index.length).fill(""),
          datasets: [line_data4.datasets[6]],
        }}
      />

      {/* -----------------------------------------3 Y------------------------------ */}
      {/* <Line
        style={{
          display:
            props.query === 0 && props.menu === 0 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={line_data5}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 1 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3y"].Index.length).fill(""),
          datasets: [line_data5.datasets[0]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 2 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3y"].Index.length).fill(""),
          datasets: [line_data5.datasets[1]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 3 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3y"].Index.length).fill(""),
          datasets: [line_data5.datasets[2]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 4 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3y"].Index.length).fill(""),
          datasets: [line_data5.datasets[3]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 5 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3y"].Index.length).fill(""),
          datasets: [line_data5.datasets[4]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 6 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3y"].Index.length).fill(""),
          datasets: [line_data5.datasets[5]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 7 && props.range === 5
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["3y"].Index.length).fill(""),
          datasets: [line_data5.datasets[6]],
        }}
      /> */}

      {/* -----------------------------------------5 Y------------------------------ */}
      {/* <Line
        style={{
          display:
            props.query === 0 && props.menu === 0 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={line_data6}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 1 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["5y"].Index.length).fill(""),
          datasets: [line_data6.datasets[0]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 2 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["5y"].Index.length).fill(""),
          datasets: [line_data6.datasets[1]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 3 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["5y"].Index.length).fill(""),
          datasets: [line_data6.datasets[2]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 4 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["5y"].Index.length).fill(""),
          datasets: [line_data6.datasets[3]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 5 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["5y"].Index.length).fill(""),
          datasets: [line_data6.datasets[4]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 6 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["5y"].Index.length).fill(""),
          datasets: [line_data6.datasets[5]],
        }}
      />
      <Line
        style={{
          display:
            props.query === 0 && props.menu === 7 && props.range === 6
              ? "inline"
              : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={line_options}
        data={{
          labels: new Array(data.Historical["5y"].Index.length).fill(""),
          datasets: [line_data6.datasets[6]],
        }}
      /> */}

      {/* --------------------------------------------------------------- */}
      <Bar
        style={{
          display: props.query === 1 && props.range === 0 ? "inline" : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={bar_options}
        data={bar_data}
      />
      <Bar
        style={{
          display: props.query === 1 && props.range === 1 ? "inline" : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={bar_options}
        data={bar_data1}
      />
      <Bar
        style={{
          display: props.query === 1 && props.range === 2 ? "inline" : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={bar_options}
        data={bar_data2}
      />
      <Bar
        style={{
          display: props.query === 1 && props.range === 3 ? "inline" : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={bar_options}
        data={bar_data3}
      />
      <Bar
        style={{
          display: props.query === 1 && props.range === 4 ? "inline" : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={bar_options}
        data={bar_data4}
      />
      <Bar
        style={{
          display: props.query === 1 && props.range === 5 ? "inline" : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={bar_options}
        data={bar_data5}
      />
      <Bar
        style={{
          display: props.query === 1 && props.range === 6 ? "inline" : "none",
        }}
        datasetIdKey="id"
        height={110}
        options={bar_options}
        data={bar_data6}
      />
    </>
  );
}

export default AllCharts;
