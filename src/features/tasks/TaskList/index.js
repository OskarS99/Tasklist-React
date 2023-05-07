import {List, Item, Content, Button} from "./styled.js";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice.js";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    <List >
        {tasks.map(task => (
            <Item
            hidden={task.done && hideDone}
            key={task.id}
            >
                <Button
                toggleDone
                onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                Delete
                onClick={() => dispatch(removeTask(task.id))}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
};

export default TasksList;