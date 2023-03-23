import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zjeść ryż", done: false },
];
const hideDone = false;


function App() {
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
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
        body={
          <Tasks tasks={tasks} hideDoneTask={hideDone} />
        }
      />
    </Container>
  );
}

export default App;
