import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());

}
return (
    <form className="form" onSubmit={onFormSubmit}>
        <input 
        value={newTaskContent}
        className="form__input" 
        type="text" 
        placeholder="Co jest do zrobienia?" 
        onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <button className="form__button">Zatwierdż zadanie</button>
    </form>
);
}

     
    


export default Form;