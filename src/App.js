import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
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
        <Route path="/zadania/:id">
           <TaskPage/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);
