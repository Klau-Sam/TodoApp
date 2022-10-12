import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@mui/material";

const PanelTabs = ({ changeTab }) => {
  const [value, setValue] = useState("to-do");
    
  const handleChange = (event, newValue) => {
    changeTab();
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Panel tabs"
      >
        <Tab value="to-do" label="To Do" />
        <Tab value="completed" label="Completed" />
      </Tabs>
    </>
  );
};

PanelTabs.propTypes = {
  changeTab: PropTypes.func
};

export default PanelTabs;