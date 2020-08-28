import React, { useRef } from 'react';
import anime from 'animejs';

const Loading = () => {
  const ref = useRef();
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
    'LOADING...'.split('').map((char, ind) => {
      return (
        <span key={char + ind} ref={ref} className="anime-character">
          {char}
        </span>
      );
    });
  return (
    <div ref={ref} className="char-container">
      {wordSplitter()}
    </div>
  );
};

export default Loading;
