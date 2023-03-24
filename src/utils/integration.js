const rectangleIntegration = (a, b, n, f) => {
  const h = (b - a) / n;
  console.log("h", h);
  var sum = 0;
  for (var k = 0; k < n; k++) {
    var x = a + k * h;
    var result = f(x);
    sum += result;
  }
  return sum * h;
};

const trapezoidalIntegration = (a, b, n, f) => {
  const h = (b - a) / n;
  const f_x0 = f(a);
  const f_xn = f(b);
  const acum = (f_x0 + f_xn) / 2;
  var sum = 0;
  for (k = 1; k < n; k++) {
    var x = a + k * h;
    sum += f(x);
  }
  return (sum + acum) * h;
};

const maxValue = (a, b, f) => {
  const maxStored = 0;
  for (x = a; x <= b; x++) {
    if (f(x) > maxStored) maxStored = f(x);
  }
  return maxStored;
};

const monteCarloIntegration = (a, b, n, f) => {
  const maxValue = maxValue(a, b, f);
  const limit = (10 * maxValue) / 100 + maxValue;
  m = Math.random() * (limit - maxValue) + maxValue;
  for (i = 0; i < n; i++) {
    x = Math.random();
    y = f(x);
  }
};

var a = -1; // Intervalo inferior
var b = 4; // Intervalo superior
var n = 1000; // Número de rectángulos
var f = function (x) {
  return Math.cos(x);
}; // Función a integrar
var result = rectangleIntegration(a, b, n, f);
console.log(result);
