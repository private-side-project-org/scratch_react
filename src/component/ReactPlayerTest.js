import React from 'react';
import ReactPlayer from 'react-player';

const ReactPlayerTest = () => {
  return (
    <div className="embed-container">
      <iframe
        src="https://player.vimeo.com/video/447842582?autoplay=1&loop=1&control=0&background=1"
        width="100vw"
        height="100vh"
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default ReactPlayerTest;
