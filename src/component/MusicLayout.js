import React from 'react';
import Navbar from './Navbar';

const MusicLayout = ({ component }) => {
  return (
    <div className="embed-container">
      <Navbar />
      <iframe
        src="https://player.vimeo.com/video/447842582?autoplay=1&loop=1&control=0&background=1"
        width="100vw"
        height="100vh"
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      ></iframe>
      {component}
    </div>
  );
};

export default MusicLayout;
