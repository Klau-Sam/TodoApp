import React, { useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Menu from "../components/Menu/Menu";
import MainPanel from "../components/MainPanel/MainPanel";
import Background from "../images/background.png";
import ListCreator from "../components/MainPanel/ListCreator/ListCreator";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "95vh",
}));

const Header = styled("div")(({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "90%",
}));

// const ListReducer = (state, action) => {
//   return [
//     { key: "today-list", values: [] }, 
//     { key: "upcoming-list", values: [] }, 
//     { key: "anytime-list", values: [], }, 
//     { key: "someday-list", values: [] },
//   ];
// };

// router in future

const MainView = () => {
  const [lists, setLists] = useState([
    { id: "today-list", name: "Today", tasks: [] }, 
    { id: "upcoming-list", name: "Upcoming", tasks: [] }, 
    { id: "anytime-list", name: "Anytime", tasks: [], }, 
    { id: "someday-list", name: "Someday", tasks: [] }
  ]);
  const [currentList, setCurrentList] = useState(null);
  const [startCreateList, setStartCreateList] = useState(false);
  const [counter, setCounter] = useState(1);

  const handlePickList = (listName) => {
    updateLists();
    const pickedList = lists.find(list => list.name === listName);
    setCurrentList(pickedList);
  };

  const handleStartCreateNewList = () => {
    updateLists();
    setCurrentList(null);
    setStartCreateList(true);
  };

  const handleAddNewList = (newList) => {
    console.log(newList);
    
    const index = checkIfExists(newList);
    
    if (index >= 0) {
      setCurrentList(lists[index]);
    } else {
      setLists(prevState => [...prevState, newList]);
      setCurrentList(newList);
    }
  };

  console.log(lists);

  const updateLists = () => { // xd
    if (currentList) {
      const listsCopy = [ ...lists ];
      const index = listsCopy.findIndex(list => list.id === currentList.id);
      listsCopy[index] = currentList;
      setLists(listsCopy);
    }
  };
  
  const checkIfExists = (newList) => {
    return lists.findIndex(list => list.id === newList.id);
  };

  const handleAddNewTask = (newTask) => {
    currentList.tasks.push({ id: counter.toString(), ...newTask });
    setCurrentList(currentList);
    setCounter(prevState => prevState + 1);
  };

  const handleMarkTaskAsCompleted = (taskId) => {
    const currentListCopy = { ...currentList };
    const task = currentListCopy.tasks.find(task => task.id === taskId);
    task.isCompleted = true;
    console.log(currentList);
    setCurrentList(currentListCopy);
  };

  const handleDeleteTask = (taskId) => {
    const currentListCopy = { ...currentList };
    const filteredTasks = 
      currentListCopy.tasks.filter(task => task.id !== taskId);
    currentListCopy.tasks = filteredTasks;
    console.log(currentList);
    setCurrentList(currentListCopy);
  };

  return (
    <Container maxWidth={false}>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="stretch">
        <Grid item xs={4}>
          <Item sx={{ background: "#9c27b0" }} >
            <Menu pickList={handlePickList}
              startCreateNewList={handleStartCreateNewList}
              customLists={lists.slice(4)}/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{ backgroundImage: `url(${Background})` }}>
            {currentList ? 
              <MainPanel list={currentList} 
                addNewTask={handleAddNewTask}
                deleteTask={handleDeleteTask}
                markTaskAsCompleted={handleMarkTaskAsCompleted} /> 
              : 
              <Header>
                <Typography variant="h3">
                Get things done!
                </Typography>
                {startCreateList && 
                <ListCreator addNewList={handleAddNewList} />}
              </Header>}
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainView;