import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => {
    tasks.lenght > 0 && (
        <div className="buttons">
            <button className="buttons__style">
                {hideDoneTasks ? "Pokaż" : "Ukryj"}
                ukończone
            </button>
            <button
                classNamw="buttons__style"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )


};

export default Buttons;