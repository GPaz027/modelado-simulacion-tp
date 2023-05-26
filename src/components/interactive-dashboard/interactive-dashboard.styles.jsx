import styled from "styled-components";

export const FunctionViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #4C78EA;
  width: 50%;
  margin: 0 auto;
  padding: 1vw 0vw;
`;

export const InputBlock = styled.div`
  width: 70%;
  margin: 0.5vw auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  align-items: space-between;
  margin: 1vw auto;
  padding: 1vw 0vw;
  border: 2px solid #4C78EA;
`;

export const Label = styled.span`
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  width: 10%;
  border-radius: 10% / 40%;
  border: 2px solid black;
  padding: 0.5vw;
  font-size: 15px;

  transition: box-shadow 0.8s ease;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 4px rgba(0, 0, 255, 0.5);
  }
`;

export const EquationInput = styled.input`
  width: 50%;
  border-radius: 10% / 40%;
  border: 2px solid black;
  padding: 0.5vw;
  font-size: 15px;
  margin: 1vw 1vw;

  transition: box-shadow 0.8s ease;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 4px rgba(0, 0, 255, 0.5);
  }
`;

export const EquationForm = styled.div`
  flex-direction: row;
`;

export const EquationLabel = styled.label`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
`;

export const SubmitButton = styled.button`
  font-size: 19px;
  background-color: #071B52;
  color: white;
  border: 4px solid #4670E3;
  border-radius: 10% / 40%;

  transition: background-color 0.8s ease;

  &:hover {
    background-color: #53679E;
  }

`;
