import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

export default () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
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
