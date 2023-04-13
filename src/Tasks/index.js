import {List, Item, Content, Button} from "./styled.js";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List >
        {tasks.map(task => (
            <Item
            hidden={task.done && hideDone}
            key={task.id}
            >
                <Button
                toggleDone
                onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button
                Delete
                onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;