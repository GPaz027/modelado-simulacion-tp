import { useContext } from "react";
import { UserInputContext } from "../../context/user-input/user-input.context";

const TypeSelect = () => {
  const { integralType, setIntegralType } = useContext(UserInputContext);

  const handleOptionChange = (event) => {
    setIntegralType(event.target.value);
  };

  return (
    <div>
      <select value={integralType} onChange={handleOptionChange}>
        <option value="">Tipo de integración</option>
        <option value="rectangles">Rectángulos</option>
        <option value="trapezoidal">Trapecios</option>
        <option value="monte-carlo">Monte Carlo</option>
      </select>
    </div>
  );
};

export default TypeSelect;
