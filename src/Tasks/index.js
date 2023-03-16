import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="list tasks">
        {tasks.map(task => (
            <li
                className={`list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "list__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--delete">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;