import { List, Item, Content, Button } from "./styled.js";
import {
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
  selectHideDone,
} from "../../tasksSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
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
            <Button
              toggleDone
              onClick={() => dispatch(toggleTaskDone(task.id))}
            >
              {task.done ? "✔" : ""}
            </Button>
            <Content done={task.done}>
              <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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
