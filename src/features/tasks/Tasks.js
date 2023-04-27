import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks.js";
import { createGlobalStyle } from "styled-components";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  
   const { tasks } = useSelector(selectTasks);
  
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
        body={<Form/>}
      />
      <Section
        title="Dodaj zadanie"
        extraHeaderContent={
          <Buttons/>
        }
        body={
          <TaskList/>
        }
      />
    </Container>
  );
}

export default Tasks;
