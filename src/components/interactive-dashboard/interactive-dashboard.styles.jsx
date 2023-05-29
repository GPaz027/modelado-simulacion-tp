import styled from "styled-components";

export const FunctionViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #4c78ea;
  border-radius: 3% / 3%;
  width: 50%;
  margin: 0 auto;
  padding: 1vw 0vw;
`;

export const InputContainer = styled.div`
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin: 1vw auto;
  padding: 1vw 0vw;
  border: 2px solid #4c78ea;
  border-radius: 3% / 3%;
`;

export const InputBlock = styled.div`
  margin: 1vw auto;
`;

export const Label = styled.span`
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  align-self: center;
`;

export const Input = styled.input`
  width: 10%;
  border-radius: 10% / 40%;
  border: 2px solid black;
  padding: 0.5vw;
  font-size: 15px;
  margin-left: 1vw;
  transition: border-color 0.8s, box-shadow 0.8s, background-color 1s ease;

  &:focus {
    outline: none;
    border-color: #2474c6;
    box-shadow: 0 0 4px rgba(0, 0, 255, 0.5);
    background-color: #e5e6e7;
  }
`;

export const EquationInput = styled.input`
  width: 50%;
  border-radius: 10% / 40%;
  border: 2px solid black;
  padding: 0.5vw;
  font-size: 15px;
  margin: 1vw 1vw;

  transition: border-color 0.8s, box-shadow 0.8s, background-color 1s ease;

  &:focus {
    outline: none;
    border-color: #2474c6;
    box-shadow: 0 0 4px rgba(0, 0, 255, 0.5);
    background-color: #e5e6e7;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;

export const EquationForm = styled.div`
  flex-direction: row;
`;

export const EquationLabel = styled.label`
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  font-size: 19px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color 0.8s ease;
  color: white;
  border-radius: 10% / 40%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
