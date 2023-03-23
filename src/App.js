import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";





function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
  { id: 1, content: "zjeść ryż", done: false },
]);

  const toggleHideDone = () => {
    setHideDone(!hideDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id ));
  }
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Dodaj zadanie"
        extraHeaderContent={
          <Buttons 
          tasks={tasks}
           hideDone={hideDone} 
           toggleHideDone={toggleHideDone}
           />
        }
        body={
          <Tasks tasks={tasks} 
          hideDoneTask={hideDone}
           removeTask={removeTask}
           />
        }
      />
    </Container>
  );
}

export default App;
