import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from './Navbar';
import drumVideo from '../assets/video/profile_low2.mp4';

const MusicLayout = ({ component }) => {
  return (
    <div className="layout-container">
      <video autoPlay muted loop className="mv-wrapper">
        <source src={drumVideo} type="video/mp4" />
      </video>
      <Navbar />
      {component}
    </div>
  );
};

export default MusicLayout;
