import React from 'react';
import './Backdrop.css';

const backdrop = props => (
  <div onClick={props.backdropClickHandler} className="backdrop"></div>
);

export default backdrop