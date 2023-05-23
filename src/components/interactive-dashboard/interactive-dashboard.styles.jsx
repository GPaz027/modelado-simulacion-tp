import styled from "styled-components";

export const FunctionViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
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
  border: 2px solid black;
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
