export const traceGenerator = (x, y, mode, type, name, width) => {

  return {
    x: x,
    y: y,
    mode: mode,
    type: type,
    name: name,
    width: width
  };
};

export const layoutGenerator = (title) => {
  return {
    title: title,
    xaxis: { title: "X" },
    yaxis: { title: "Y" },
  };
};
