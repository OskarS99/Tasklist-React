import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #15857eb0;
  margin: 0 10px;
  transition: color 0.5s;

  @media (max-width: 1000px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: #0ed1c4b0;
  }

  &:disabled {
    color: rgb(202, 210, 216);
  }
`;
