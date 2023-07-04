import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid grey;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink =styled(Link)`
text-decoration: none;
color: #15857eb0;

&:hover{
  font-weight: bold;
}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  padding: 0;
  transition: background 2s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: #04950d;

      &:hover {
        background-color: #5f9d63;
      }

      &:active {
        background-color: #729775;
      }
    `}

  ${({ Delete }) =>
    Delete &&
    css`
      background-color: red;
      color: white;

      &:hover {
        background-color: hsl(0, 96%, 67%);
      }

      &:active {
        background-color: hwb(0 47% 4%);
      }
    `}
`;
