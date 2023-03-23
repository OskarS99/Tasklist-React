import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHidedone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHidedone} className="buttons__style">
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone" }
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