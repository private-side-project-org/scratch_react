import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import anime from 'animejs';

const MusicLayout = ({ component }) => {
  const ref = useRef();
  const [loading, setLoading] = useState(true);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);

  const moveUp = () => {
    return anime({
      targets: '.anime-character',
      translateY: [-1000, 10, 10],
      loop: true,
      direction: 'alternate',
      delay: function (el, i) {
        return i * 100;
      },
      easing: 'easeInOutSine',
    });
  };

  setTimeout(() => {
    moveUp();
  });

  const wordSplitter = () =>
    'LOADING...'.split('').map((char) => {
      console.log(char);
      return (
        <span ref={ref} className="anime-character">
          {char}
        </span>
      );
    });

  return (
    <div className="embed-container">
      <iframe
        src="https://player.vimeo.com/video/448045945?autoplay=1&loop=1&background=1"
        onLoad={() => setLoading(false)}
      ></iframe>
      {loading ? (
        <div ref={ref} className="char-container">
          {wordSplitter()}
        </div>
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
