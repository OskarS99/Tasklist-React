import "./style.css";

const Form = () => (
    <form className="form form">
            <input className="form__input newTask" type="text" placeholder="Co jest do zrobienia?" autofocus/>
            <button className="form__button button">Zatwierdż zadanie</button>
    </form>
);

export default Form;