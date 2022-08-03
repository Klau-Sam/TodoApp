import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TodoListItem = (
  { task, showCompleted, markTaskAsCompleted, deleteTask }
) => {

  const handleCheckCheckbox = (event) => { 
    markTaskAsCompleted(event.target.id);
  };

  const handleDeleteTask = (event) => {
    deleteTask(event.target.id);
    console.log(event.target);
  };
  
  return (
    <div>
      <FormControlLabel 
        control={
          showCompleted ? 
            <Checkbox 
              id={task.id}
              inputProps={{ "aria-label": "controlled" }}
              checked={task.isCompleted} 
              color="secondary" 
              disabled 
            /> : <Checkbox 
              id={task.id}
              inputProps={{ "aria-label": "controlled" }}
              checked={task.isCompleted}
              color="secondary"
            />}
        onChange={handleCheckCheckbox} 
        label={task.title} />
      {showCompleted && 
      <Button 
        id={task.id} 
        color="secondary"
        onClick={handleDeleteTask}> 
        <DeleteOutlineIcon id={task.id} />
      </Button>}
    </div>
  );
};

TodoListItem.propTypes = {
  task: PropTypes.object.isRequired,
  markTaskAsCompleted: PropTypes.func,
  showCompleted: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func,
};

export default TodoListItem;