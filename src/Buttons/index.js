import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons__style">
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone" }
                </button>
                <button
                    onClick={setAllDone}
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