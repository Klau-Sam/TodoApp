import React from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Cloud from "@mui/icons-material/Cloud";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const Menu = ({ pickList, startCreateNewList, customLists }) => {

  const handlePickList = (event) => {
    pickList(event.target.textContent);
  };

  const handleCreateList = () => {
    startCreateNewList();
  };

  const customListsMapped = customLists.map(list => 
    (<MenuItem key={list.id} onClick={handlePickList}>
      <ListItemIcon>
        <Cloud fontSize="small" />
      </ListItemIcon>
      <ListItemText 
        primary={list.name} 
        sx={{ textAlign: "start" }}
      />
    </MenuItem>
    ));

  return (
    <Paper sx={{ minHeight: "95%", maxWidth: "80%", 
      marginLeft: "auto", marginRight: "auto"}}>
      <MenuList>
        <MenuItem 
          key="today-list" 
          onClick={handlePickList}>
          <ListItemIcon>
            <AlarmOnIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Today" 
            sx={{ textAlign: "start"}}
          />
        </MenuItem>
        <MenuItem key="upcoming-list" onClick={handlePickList}>
          <ListItemIcon>
            <CalendarMonthIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Upcoming" 
            sx={{ textAlign: "start" }}
          />
        </MenuItem>
        <MenuItem key="anytime-list" onClick={handlePickList}>
          <ListItemIcon>
            <AutoAwesomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Anytime" 
            sx={{ textAlign: "start" }}
          />
        </MenuItem>
        <MenuItem key="someday-list" onClick={handlePickList}>
          <ListItemIcon>
            <AirplanemodeActiveIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Someday" 
            sx={{ textAlign: "start" }}
          />
        </MenuItem>
        <Divider />
        <MenuItem key="create-own" onClick={handleCreateList}>
          {/* <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon> */}
          <ListItemText sx={{ textAlign: "center", color: "black" }}>
            Create own list
          </ListItemText>
        </MenuItem>
        <Divider />
        {customListsMapped}
      </MenuList>
    </Paper>

  );
};

Menu.propTypes = {
  pickList: PropTypes.func,
  startCreateNewList: PropTypes.func,
  customLists: PropTypes.array.isRequired
};

export default Menu;