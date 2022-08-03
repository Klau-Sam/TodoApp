import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import TodoList from "./TodoList/TodoList";
import PanelTabs from "./PanelTabs";

const MainPanel = ({ list, addNewTask, deleteTask, markTaskAsCompleted }) => {
  const [completed, setCompleted] = useState(false);

  const handleChangeTab = () => {
    setCompleted(prevState => !prevState);
  };

  console.log(completed);

  return (
    <>
      <Typography variant="h4" color="black">Todos: {list.name}</Typography>
      <Box sx={{ width: "100%" }}>
        <PanelTabs changeTab={handleChangeTab} />
        <TodoList 
          list={list} 
          addNewTask={addNewTask} 
          deleteTask={deleteTask}
          markTaskAsCompleted={markTaskAsCompleted}
          showCompleted={completed} />
      </Box>
    </>
  );
};

MainPanel.propTypes = {
  list: PropTypes.object,
  addNewTask: PropTypes.func,
  deleteTask: PropTypes.func,
  markTaskAsCompleted: PropTypes.func
};

export default MainPanel;