import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from './Navbar';

const MusicLayout = ({ component }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <ReactPlayer
        url="https://vimeo.com/447842582"
        playing
        loop
        height="100vh"
        width="100vw"
        style={{
          margin: 0,
          position: 'absolute',
          opacity: 0.8,
          overFlow: 'hidden',
        }}
        muted
        config={{
          vimeo: {
            playerOptions: {
              background: 1,
              controls: 0,
              muted: true,
              maxwidth: '10vw',
            },
          },
        }}
      />
      {component}
    </div>
  );
};

export default MusicLayout;
