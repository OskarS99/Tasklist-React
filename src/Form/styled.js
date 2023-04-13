import styled from "styled-components";

export const FormPart = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid grey;
`;

export const Button = styled.button`
  border: none;
  background-color: #15857eb0;
  color: white;
  padding: 10px;
  transition: 1s;

  &:hover {
    background-color: #0aa399b0;
    transform: scale(1.1);
  }
`;
