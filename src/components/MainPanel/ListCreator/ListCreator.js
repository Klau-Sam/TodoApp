import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(({
  display: "flex",
  flexDirection: "column",
}));

const ListCreator = ({ addNewList }) => {
  const [newListName, setNewListName] = useState("");

  const handleChange = (event) => {
    setNewListName(event.target.value);
  };

  const handleAddNewList = () => {
    const clearListName = newListName.trim();
    if (clearListName !== "") {
      const splittedTitle = clearListName.toLowerCase().split(" ");
      addNewList({
        id: splittedTitle.join("-") + "-list", name: newListName, tasks: []
      });
    }
  };

  return (
    <Wrapper>
      <TextField 
        id="list-creator"
        label="New list title"
        value={newListName}
        onChange={handleChange}/>
      <Button 
        id="list-creator" 
        variant="contained" 
        size="large" 
        color="secondary" 
        onClick={handleAddNewList}>
    Add
      </Button>
    </Wrapper>);
};

ListCreator.propTypes = {
  addNewList: PropTypes.func
};

export default ListCreator;