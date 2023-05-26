import React, { useState } from "react";
import { UserInputContext } from "../../context/user-input/user-input.context";
import { useContext } from "react";
import FunctionRenderer from "../funcion-plot/FunctionPlotter";
import TypeSelect from "../type-select/type-select.component";
import RectangleComponent from "../rectangle/rectangle.component";
import Trapezoidal from "../trapezoidal/trapezoidal";
import MonteCarloIntegration from "../montecarlo/montecarlo.component";

import {
  FunctionViewer,
  InputContainer,
  InputBlock,
  Input,
  Label,
  EquationInput,
  EquationForm,
  EquationLabel,
  SubmitButton
} from "./interactive-dashboard.styles";

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
      <FunctionViewer>
        <EquationLabel htmlFor="input">Ingrese una ecuacion</EquationLabel>
        <EquationForm>
          <EquationInput
            type="text"
            id="input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <SubmitButton onClick={handleButtonClick}>Validar</SubmitButton>
          {equation && <FunctionRenderer expression={equation} />}
        </EquationForm>
      </FunctionViewer>

      <InputContainer>
        <InputBlock>
          <Label>Límite inferior (a)</Label>
          <Input
            placeholder="Límite inferior"
            type="number"
            value={infLimit}
            onChange={handleInfChange}
          />
        </InputBlock>

        <InputBlock>
          <Label>Límite superior (b)</Label>
          <Input
            placeholder="Límite superior"
            type="number"
            value={supLimit}
            onChange={handleSupChange}
          />
        </InputBlock>

        <InputBlock>
          <Label>Cantidad de puntos (N)</Label>
          <Input
            placeholder="Cantidad de rectángulos"
            type="number"
            value={recAmount}
            onChange={handleRecChange}
            max="7000"
          />
        </InputBlock>

        <TypeSelect />
      </InputContainer>

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
