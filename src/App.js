import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import {  Navigation, NavigationLink, StyledNavLink } from "./styled";

export default () => (
  <BrowserRouter>
    <nav>
      <Navigation>
        <NavigationLink>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavigationLink>
        <NavigationLink>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </NavigationLink>
      </Navigation>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);
