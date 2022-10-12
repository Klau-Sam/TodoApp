import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Box, FormGroup, FormControlLabel, 
  Checkbox, TextField, Button } from "@mui/material";
import TodoListItem from "./TodoListItem";

//priority

const TodoList = (
  { list, addNewTask, deleteTask, markTaskAsCompleted, showCompleted }
) => {
  const inputText = useRef();

  const handleTaskAdd = () => {
    const taskTitle = inputText.current.value.toString().trim();
    if (taskTitle !== "") {
      addNewTask({ 
        title: taskTitle, 
        isCompleted: false 
      });
      inputText.current.value = "";
    }
  };

  const tasks = list.tasks
    .filter(task => task.isCompleted === showCompleted)
    .map(task => (
      <TodoListItem 
        key={task.id}
        task={task}
        showCompleted={showCompleted}
        markTaskAsCompleted={markTaskAsCompleted}
        deleteTask={deleteTask}
      />
    ));

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormGroup sx={{ m: 1, alignItems: "flex-start" }}>
        {tasks}
        {!showCompleted && 
        <div>
          <FormControlLabel control={<Checkbox disabled />} 
            label=
              {<TextField inputRef={inputText}
                id="new-task-input"
                placeholder="Add new task"
                variant="standard" />} />
          <Button variant="contained" 
            size="small" 
            color="secondary" 
            onClick={handleTaskAdd}>
          Add
          </Button>
        </div>}
      </FormGroup>
    </Box>
  );
};

TodoList.propTypes = {
  list: PropTypes.object,
  addNewTask: PropTypes.func,
  deleteTask: PropTypes.func,
  markTaskAsCompleted: PropTypes.func,
  showCompleted: PropTypes.bool.isRequired
};

export default TodoList;