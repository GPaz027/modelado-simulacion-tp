import React from "react";
import { create, all } from 'mathjs'
import Plot from 'react-plotly.js';

const math = create(all)

const isValidExpression = (expression) => {
  try {
    math.parse(expression).compile().evaluate({ x: 1 });
    // Verificar que la expresión no termine en un operador o un paréntesis sin cerrar
    const lastChar = expression.trim().slice(-1);
    if (['+', '-', '*', '/', '(', ','].includes(lastChar)) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

const FunctionRenderer = ({ expression }) => {
  const validExpression = isValidExpression(expression);

  if (!validExpression) {
    return <div style={{ color: "red" }}>Función inválida</div>;
  }

  const xValues = [];
  const yValues = [];

  for (let x = -10; x <= 10; x += 0.1) {
    xValues.push(x);
    yValues.push(math.evaluate(expression, { x: x }));
  }

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'blue' },
        },
      ]}
      layout={{
        width: 600,
        height: 400,
        title: expression,
        xaxis: {
          title: 'x',
        },
        yaxis: {
          title: 'y',
        },
      }}
    />
  );
};

export default FunctionRenderer;
