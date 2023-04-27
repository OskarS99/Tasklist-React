import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice.js";
import { Button, Wrapper } from "./styled.js";


const Buttons = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Wrapper>
    {tasks.length > 0 && (
      <>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>
        <Button onClick={() => dispatch(setAllDone())} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Wrapper>
  )
}
  


export default Buttons;
