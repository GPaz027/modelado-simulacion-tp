import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function MonteCarloIntegration({ inf, sup, n, equation }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  console.log("Inf", inf);
  console.log("Sup", sup);
  const parsedInf = parseInt(inf);
  const parsedSup = parseInt(sup);
  const parsedN = parseInt(n);

  const points = [];
  let sum = 0;
  let validPoints = 0;
  for (let i = 0; i < n; i++) {
    const x = parsedInf + Math.random() * (parsedSup - parsedInf);
    const y = Math.random();
    const value = Math.pow(x, 2);
    if (y <= value) validPoints++;
    points.push({ x, y });
    console.log("X", x, "Y", y);
    sum += value;
  }

  const maxY = points.reduce((max, current) =>
    current.y > max.y ? current : max
  );
  const minY = points.reduce((min, current) =>
    current.y < min.y ? current : min
  );

  console.log("MaxY", maxY);
  console.log("MinY", minY);

  // Estimate the integral
  const area = (parsedSup - parsedInf) * (maxY.y - minY.y);
  console.log("area", area);
  const result = (validPoints / points.length) * area;
  const estimate = (sum / n) * area;
  console.log("Result", result);

  console.log(points);
  // Prepare data for the scatter plot
  const data = {
    datasets: [
      {
        label: "Points",
        data: points,
        showLine: false,
        pointBackgroundColor: "rgba(0, 0, 255, 0.5)",
        pointRadius: 3,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Monte Carlo Integration",
      },
    },
  };
  return <Line options={options} data={data} />;
}

export default MonteCarloIntegration;
