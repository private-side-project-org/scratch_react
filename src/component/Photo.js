import React, { useState } from 'react';
import Navbar from './Navbar';
import PhotoOne from './animationPhoto/PhotoOne';

const MusicLayout = ({ component }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="embed-container">
      <Navbar />
      <PhotoOne />
    </div>
  );
};

export default MusicLayout;
