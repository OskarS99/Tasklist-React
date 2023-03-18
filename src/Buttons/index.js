import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.lenght > 0 && (
            <>
                <button className="buttons__style">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"}
                    ukończone
                </button>
                <button
                    className="buttons__style"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;