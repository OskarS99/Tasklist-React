import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation, NavigationLink, StyledNavLink } from "./styled";

const App = () => (
  <HashRouter>
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
          <TaskPage />
        </Route>
        <Route exact path="/zadania">
          <TasksPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/autor">
          <AuthorPage />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
export default App;
