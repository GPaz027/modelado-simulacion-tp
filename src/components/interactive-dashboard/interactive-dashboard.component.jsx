import React, { useState } from "react";
import { UserInputContext } from "../../context/user-input/user-input.context";
import { useContext } from "react";
import FunctionRenderer from "../funcion-plot/FunctionPlotter";
import TypeSelect from "../type-select/type-select.component";
import RectangleComponent from "../rectangle/rectangle.component";
import Trapezoidal from "../trapezoidal/trapezoidal";
import MonteCarloIntegration from "../montecarlo/montecarlo.component";

const InteractiveDashboard = () => {
  const {
    infLimit,
    setInfLimit,
    supLimit,
    setSupLimit,
    recAmount,
    setRecAmount,
    integralType,
  } = useContext(UserInputContext);
  const [equation, setEquation] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInfChange = (event) => {
    setInfLimit(event.target.value);
  };

  const handleSupChange = (event) => {
    setSupLimit(event.target.value);
  };

  const handleRecChange = (event) => {
    setRecAmount(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setEquation(inputValue);
  };

  return (
    <div>
      <label htmlFor="input">Ingrese una ecuacion:</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Validar</button>
      {equation && <FunctionRenderer expression={equation} />}
      <div style={{ marginTop: "10px" }}>
        <input
          placeholder="Límite inferior"
          type="number"
          value={infLimit}
          onChange={handleInfChange}
        />
        <input
          placeholder="Límite superior"
          type="number"
          value={supLimit}
          onChange={handleSupChange}
        />
        <input
          placeholder="Cantidad de rectángulos"
          type="number"
          value={recAmount}
          onChange={handleRecChange}
          max="7000"
        />
      </div>

      <TypeSelect />

      {integralType === "rectangles" && (
        <RectangleComponent
          inf={infLimit}
          sup={supLimit}
          n={recAmount}
          equation={equation}
        />
      )}

      {integralType === "trapezoidal" && (
        <Trapezoidal
          inf={infLimit}
          sup={supLimit}
          n={recAmount}
          equation={equation}
        />
      )}

      {integralType === "monte-carlo" && (
        <MonteCarloIntegration
          inf={infLimit}
          sup={supLimit}
          n={recAmount}
          equation={inputValue}
        />
      )}
    </div>
  );
};

export default InteractiveDashboard;
