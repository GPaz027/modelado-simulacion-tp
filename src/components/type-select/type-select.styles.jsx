import styled from "styled-components";

export const Select = styled.select`
  margin-left: 1vw;
  margin-top: 10px;
  padding: 1vw 1vw;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.8s ease;
  color: white;
  border-radius: 10% / 40%;
  font-size: 18px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Option = styled.option``;
