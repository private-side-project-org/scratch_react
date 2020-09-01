import React, { useState, useRef, useEffect } from 'react';
import Navbar from 'components/Navbar';
import Loading from 'components/shared/Loading';

const MusicLayout = ({ component }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="embed-container">
      <iframe
        src="https://player.vimeo.com/video/448045945?autoplay=1&loop=1&background=1"
        onLoad={() => setLoading(false)}
      ></iframe>
      {loading ? (
        <Loading />
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
