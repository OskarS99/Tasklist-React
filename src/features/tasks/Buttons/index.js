import { Button, Wrapper } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>
        <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Wrapper>
);

export default Buttons;
