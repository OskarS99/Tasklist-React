import { List, Item, Content, Button, StyledLink } from "./styled.js";
import {
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
  selectHideDone,
} from "../../tasksSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName.js";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item hidden={task.done && hideDone} key={task.id}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button Delete onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
