import React from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { ExampleTasksButton } from "./ExampleTasksButton";
import { createGlobalStyle } from "styled-components";

function Tasks() {

  const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #ededed;
}
    `;

  return (
    <Container>
      <GlobalStyle/>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton/>}
        body={<Form />}
      />
      <Section
        title="Dodaj zadanie"
        extraHeaderContent={
          <Buttons/>
        }
        body={
          <TasksList/>
        }
      />
    </Container>
  );
}

export default Tasks;
