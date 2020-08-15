import React from 'react';
import Navbar from './Navbar';

const MusicLayout = ({ component }) => {
  return (
    <div className="embed-container">
      <Navbar />
      <iframe src="https://player.vimeo.com/video/448045945?autoplay=1&loop=1&background=1"></iframe>
      {component}
    </div>
  );
};

export default MusicLayout;
