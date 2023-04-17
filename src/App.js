import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks.js";
import { createGlobalStyle } from "styled-components";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone((prevHideDone) => !prevHideDone);
  };

  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } =
    useTasks();

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
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Dodaj zadanie"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default App;
