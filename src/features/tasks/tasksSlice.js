import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./taskLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
        state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload);
        state.tasks[index].done = !state.tasks[index].done;
    },
    removeTask: (state, action) => {
       const index = state.tasks.findIndex(task => task.id === action.payload);
       state.tasks.splice(index, 1);
    },
    setAllDone: (state) => {
       for (const task of state.tasks) {
        task.done = true;
       }
    },
    fetchExampleTasks: state => {
         state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload:tasks}) => {
        state.tasks = tasks;
        state.loading = false;
    },
    fetchExampleTasksError: state => {
        state.loading = false;
    },    
    },
  
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
