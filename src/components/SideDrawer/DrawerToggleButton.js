import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => (
  <button onClick={props.drawerClickHandler} className="toggle-button">
    <div className="toggle-button-line"/>
    <div className="toggle-button-line"/>
    <div className="toggle-button-line"/>
  </button>
);

export default drawerToggleButton;