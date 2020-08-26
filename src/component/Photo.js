import React, { useState, Component } from 'react';
import Navbar from './Navbar';
import PhotoOne from './animationPhoto/PhotoOne';

const Photo = () => {
  return (
    <div className="embed-container">
      <Navbar />
      <PhotoOne />
    </div>
  );
};

export default Photo;
