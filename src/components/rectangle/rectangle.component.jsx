import Plot from "react-plotly.js";
import { layoutGenerator, traceGenerator } from "../../utils/plotly";

const RectangleComponent = ({ inf, sup, n, func }) => {
  const rectangleIntegration = (inf, sup, rec, f) => {
    let a = parseInt(inf);
    let b = parseInt(sup);
    let n = parseInt(rec);
    const valuesX = [];
    const valuesY = [];
    let h = (b - a) / n;
    let sum = 0;
    for (var k = 0; k < n; k++) {
      let x = a + (k * h);
      valuesX.push(x);
      var result = f(x);
      valuesY.push(result);
      sum += result;
    }
    return {
      result: sum * h,
      x: valuesX,
      y: valuesY,
    };
  };

  // mathjax y latex

  const result = rectangleIntegration(inf, sup, n, func);

  const trace = traceGenerator(
    result.x,
    result.y,
    "lines+markers+text",
    "scatter",
    "Integral"
  );

  const h = (sup - inf) / n;
  const rectangle = traceGenerator(
    result.x,
    result.y,
    "",
    "bar",
    "Aproximación Rectangulos",
    h
  );

  const layout = layoutGenerator("Integración por rectángulos");

  return (
    <div>
      <Plot
        data={[trace, rectangle]}
        layout={layout}
        style={{ width: "50%", height: "50%" }}
      />
      <span>{result.result}</span>
    </div>
  );
};

export default RectangleComponent;
