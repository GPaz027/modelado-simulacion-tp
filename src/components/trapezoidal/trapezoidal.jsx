import Plot from "react-plotly.js";
import { traceGenerator, layoutGenerator } from "../../utils/plotly";

const Trapezoidal = ({ inf, sup, n, func }) => {
  const trapezoidalIntegration = (inf, sup, rec, f) => {
    let a = parseInt(inf);
    let b = parseInt(sup);
    let n = parseInt(rec);

    const valuesX = [];
    const valuesY = [];

    const h = (b - a) / n;
    const f_x0 = f(a);
    const f_xn = f(b);
    var acum = (f_x0 + f_xn) / 2;
    var sum = 0;
    for (var k = 1; k < n; k++) {
      let x = a + k * h;
      valuesX.push(x);
      let result = f(x);
      valuesY.push(result);
      sum += result;
    }
    return {
      result: (sum + acum) * h,
      x: valuesX,
      y: valuesY,
    };
  };

  const result = trapezoidalIntegration(inf, sup, n, func);

  const trace = traceGenerator(
    result.x,
    result.y,
    "lines+markers+text",
    "scatter",
    "Integral"
  );

  const h = (sup - inf) / n;
  const trapecios = traceGenerator(
    result.x,
    result.y,
    "lines",
    "scatter",
    "Aproximación Trapecios",
    h
  );
  const data = [
    {
      x: result.x,
      y: result.y,
      mode: "lines+markers+text",
      fill: "tozeroy",
      fillcolor: "rgba(0, 0, 255, 0.5)",
      line: {
        color: "blue",
        width: 2,
      },
      name: "Aproximación por trapecios",
      width: h,
    },
  ];

  const layout = layoutGenerator("Integración por trapecios");

  return (
    <div>
      <Plot
        data={data}
        layout={layout}
        style={{ width: "50%", height: "50%" }}
      />
      <span>{result.result}</span>
    </div>
  );
};

export default Trapezoidal;
