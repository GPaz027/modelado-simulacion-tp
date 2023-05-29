import { useContext } from "react";
import { UserInputContext } from "../../context/user-input/user-input.context";
import { Select, Option } from "./type-select.styles";
import { Fragment } from "react";

const TypeSelect = () => {
  const { integralType, setIntegralType } = useContext(UserInputContext);

  const handleOptionChange = (event) => {
    setIntegralType(event.target.value);
  };

  return (
    <Fragment>
      <Select value={integralType} onChange={handleOptionChange}>
        <Option value="">Tipo de integración</Option>
        <Option value="rectangles">Rectángulos</Option>
        <Option value="trapezoidal">Trapecios</Option>
        <Option value="monte-carlo">Monte Carlo</Option>
      </Select>
    </Fragment>
  );
};

export default TypeSelect;
