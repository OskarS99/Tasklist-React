import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    font-weight: bold;
  }
  text-decoration: none;
  color: white;
`;
export const NavigationLink = styled.li`
  display: inline-block;
  margin: 10px;
`;

export const Navigation = styled.ul`
  max-width: 100%;
  background-color: #15857eb0;
  text-align: center;
  margin: auto;
  padding: 20px;
  list-style-type: none;
`;
