import React from 'react';

import DrawerToggleButton  from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton drawerClickHandler={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo"><a href="/">THE LOGO</a></div>
      <div className="spacer"/>
      <div className='toolbar-navigation-items'>
        <ul>
          <li><a href="#">Nav Item</a></li>
          <li><a href="#">Nav Item</a></li>
        </ul>
      </div>
    </nav>
  </header> 
);

export default toolbar;