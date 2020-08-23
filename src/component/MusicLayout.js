import React, { useState } from 'react';
import Navbar from './Navbar';

const MusicLayout = ({ component }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="embed-container">
      <iframe
        src="https://player.vimeo.com/video/448045945?autoplay=1&loop=1&background=1"
        onLoad={() => setLoading(false)}
      ></iframe>
      {loading ? (
        <span classname="load-image-container">LOADING</span>
      ) : (
        <>
          <Navbar />
          {component}
        </>
      )}
    </div>
  );
};

export default MusicLayout;
