import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from './Navbar';

const MusicLayout = ({ component }) => {
  return (
    <div className="layout-container">
      <Navbar />
      {component}
    </div>
  );
};

export default MusicLayout;
