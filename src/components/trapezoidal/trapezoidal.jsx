import Plot from "react-plotly.js";
import { traceGenerator, layoutGenerator } from "../../utils/plotly";
import { require } from "mathjs";

const math = require('mathjs');

const Trapezoidal = ({ inf, sup, n, equation }) => {
  const trapezoidalIntegration = (inf, sup, rec, f) => {
    let a = parseInt(inf);
    let b = parseInt(sup);
    let n = parseInt(rec);
  
    const scope = { x: 0 };
    const node = math.compile(f); // guarda el nodo en una constante
  
    const valuesX = [];
    const valuesY = [];
  
    const h = (b - a) / n;
    const f_x0 = node.evaluate({ x: a }); // evalúa el nodo en a
    const f_xn = node.evaluate({ x: b }); // evalúa el nodo en b
    var acum = (f_x0 + f_xn) / 2;
    var sum = 0;
    for (var k = 1; k < n; k++) {
      let x = a + k * h;
      valuesX.push(x);
      let result = node.evaluate({ x }); // evalúa el nodo en x
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