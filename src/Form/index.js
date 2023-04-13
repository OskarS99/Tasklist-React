import React, { useState } from "react";
import {FormPart, Input, Button} from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };
  return (
    <FormPart onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Zatwierdż zadanie</Button>
    </FormPart>
  );
};

export default Form;
