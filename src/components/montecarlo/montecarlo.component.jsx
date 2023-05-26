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

import { create, all } from "mathjs";
import { ResultSpan } from "./montecarlo.styles";

const mathjs = create(all);

const MonteCarloIntegration = ({ inf = 0, sup = 0, n = 1, equation }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const parsedInf = parseInt(inf);
  const parsedSup = parseInt(sup);
  const parsedN = parseInt(n);

  const points = [];
  const X = [];
  const Y = [];
  const funcValues = [];
  let sum = 0;
  let validPoints = 0;

  const YInf = mathjs.evaluate(equation, { x: parsedInf });
  const YSup = mathjs.evaluate(equation, { x: parsedSup });
  var keepOrder = true;
  if (YInf > YSup) keepOrder = false;

  for (let i = 0; i < parsedN; i++) {
    const x = parsedInf + Math.random() * (parsedSup - parsedInf);
    var y;
    if (keepOrder) {
      y = Math.floor(Math.random() * (YSup - YInf + 1)) + YInf;
    } else {
      y = Math.floor(Math.random() * (YInf - YSup + 1)) + YSup;
    }
    var value = mathjs.evaluate(equation, { x: x });
    if (y <= value) validPoints++;
    points.push({ x, y });
    X.push(x);
    Y.push(y);
    funcValues.push(value);
    console.log("X", x, "Y", y);
    sum += value;
  }

  var maxY = points.reduce((max, current) =>
    current.y > max.y ? current : max
  );
  var minY = points.reduce((min, current) =>
    current.y < min.y ? current : min
  );

  console.log("MaxY", maxY);
  console.log("MinY", minY);

  // Estimate the integral
  const area = (parsedSup - parsedInf) * (maxY.y - minY.y);
  console.log("Area", area);
  const result = (validPoints / points.length) * area;
  const estimate = (sum / parsedN) * area;
  console.log("Result", result);
  console.log("Points X", points);

  // Prepare data for the scatter plot
  const data = {
    labels: X,
    datasets: [
      {
        label: "Points",
        data: Y,
        showLine: false,
        pointBackgroundColor: "rgba(0, 0, 255, 0.5)",
        pointRadius: 3,
        borderWidth: 1,
      },
      {
        label: "Function",
        data: funcValues,
        showLine: false,
        pointBackgroundColor: "rgba(234, 72, 34, 1)",
        pointRadius: 3,
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        type: "linear",
        ticks: {
          stepSize: 1,
          min: 1,
        },
      },
      y: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Monte Carlo Integration",
      },
    },
  };

  return (
    <div style={{"margin-bottom": "1vw"}}>
      <Line
        options={options}
        data={data}
        style={{
          width: "50%",
          height: "50%",
          justifyContent: "center",
          margin: "0 auto",
        }}
      />
      <ResultSpan>Resultado aproximado: {result}</ResultSpan>
    </div>
  );
};

export default MonteCarloIntegration;
