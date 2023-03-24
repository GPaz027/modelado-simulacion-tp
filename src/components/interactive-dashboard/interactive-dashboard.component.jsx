import RectangleComponent from "../rectangle/rectangle.component";
import TypeSelect from "../type-select/type-select.component";
import { useContext } from "react";
import { UserInputContext } from "../../context/user-input/user-input.context";

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

  const handleInfChange = (event) => {
    setInfLimit(event.target.value);
    console.log(infLimit);
  };

  const handleSupChange = (event) => {
    setSupLimit(event.target.value);
    console.log(supLimit);
  };

  const handleRecChange = (event) => {
    setRecAmount(event.target.value);
    console.log(recAmount);
  };

  const func = (x) => Math.cos(x);

  return (
    <div>
      {integralType === "rectangles" && (
        <RectangleComponent
          inf={infLimit}
          sup={supLimit}
          n={recAmount}
          func={func}
        />
      )}

      <TypeSelect />

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
  );
};

export default InteractiveDashboard;
