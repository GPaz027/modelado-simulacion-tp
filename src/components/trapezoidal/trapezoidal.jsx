import Plot from "react-plotly.js";
import { traceGenerator, layoutGenerator } from "../../utils/plotly";

const math = require("mathjs");

const Trapezoidal = ({ inf, sup, n, equation }) => {
  const trapezoidalIntegration = (inf, sup, rec, f) => {
    let a = parseInt(inf);
    let b = parseInt(sup);
    let n = parseInt(rec);

    const scope = { x: 0 };
    const node = math.compile(f); // Guarda el nodo en una constante

    const valuesX = [];
    const valuesY = [];

    const h = (b - a) / n;
    const f_x0 = node.evaluate({ x: a }); // Evalúa el nodo en a
    const f_xn = node.evaluate({ x: b }); // Evalúa el nodo en b
    var acum = (f_x0 + f_xn) / 2;
    var sum = 0;
    for (var k = 1; k < n; k++) {
      let x = a + k * h;
      valuesX.push(x);
      let result = node.evaluate({ x }); // Evalúa el nodo en x
      valuesY.push(result);
      sum += result;
    }
    return {
      result: (sum + acum) * h,
      x: valuesX,
      y: valuesY,
    };
  };

  const result = trapezoidalIntegration(inf, sup, n, equation);

  const h = (sup - inf) / n;

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
        style={{ width: "50%", height: "50%", justifyContent: "center", margin: "0 auto" }}
      />
      <span>{result.result}</span>
    </div>
  );
};

export default Trapezoidal;
