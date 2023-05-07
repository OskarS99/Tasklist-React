import React, { useState, useRef} from "react";
import {StyledForm, Input, Button} from "./styled.js";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice.js";

const Form = () => {  
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

 const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault(); 
    
    dispatch(addTask({
      content: newTaskContent.trim(),
      done: false,
      id: nanoid(),
    }))

    if (newTaskContent.trim() === "") {
      return;
    }
  
   

    setNewTaskContent("");
    inputRef.current.focus()
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Zatwierdż zadanie</Button>
    </StyledForm>
  );
};

export default Form;
