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
<<<<<<< HEAD
    'LOADING...'.split('').map((char, ind) => {
      return (
        <span key={char + ind} ref={ref} className="anime-character">
=======
    'LOADING...'.split('').map((char) => {
      console.log(char);
      return (
        <span ref={ref} className="anime-character">
>>>>>>> 3c5f7b6cc06fbb451a2393575cc06eb0ff221fef
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
