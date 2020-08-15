import React from 'react';
import Navbar from './Navbar';

const MusicLayout = ({ component }) => {
  return (
    <div className="embed-container">
      <Navbar />
      <iframe
        src="https://player.vimeo.com/video/448045945?"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      {component}
    </div>
  );
};

export default MusicLayout;
