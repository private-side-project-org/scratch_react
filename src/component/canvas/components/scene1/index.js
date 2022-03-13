import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows } from '@react-three/drei';
import ThreeJS from './ThreeJS';
import ThreeJS2 from './ThreeJS2';

softShadows();

const ThreeController = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [moveObject, setMoveObject] = useState(null);

  const generateBoxes = () => {
    const absIntX = Math.abs(Math.floor(x));
    const absIntY = Math.abs(Math.floor(y));
    console.log('absIntX', absIntX);
    const numberOfObject = absIntX > absIntY ? absIntX : absIntY;
    const objects = [];

    for (let i = 0; i < numberOfObject; i++) {
      const floatI = i / 10;
      objects.push(
        <ThreeJS2
          position={[x - i / 10, y, -i]}
          args={[0.5 - floatI, 0.5 - floatI, 0.5 - floatI]}
          color="red"
          frameSpeed={2}
        />
      );
    }

    if (objects.length === 0) {
      objects.push(
        <ThreeJS2
          position={[x, y, 0]}
          args={[0.5, 0.5, 0.5]}
          color="red"
          frameSpeed={2}
        />
      );
    }
    setMoveObject(<>{objects}</>);
  };

  useEffect(() => {
    generateBoxes();
  }, [x, y]);

  // useEffect(() => {
  //   const onScroll = (e) => {
  //     console.log('pageY', window.pageYOffset);
  //     console.log('pageX', window.pageXOffset);
  //     setX(window.pageXOffset / 50);
  //     setY(window.pageYOffset / 40);
  //   };
  //   window.addEventListener('scroll', onScroll);
  //   return () => removeEventListener('scroll', onScroll);
  // }, [window.pageXOffset, window.pageYOffset]);
  const mouseEvent = (e) => {
    console.log(e);
    console.log(e.clientX);
    console.log(e.target.width * 0.5);
    setX((e.clientX - e.target.width * 0.5) / 80);
    setY((390 - e.pageY) / 60);
  };
  return (
    <div className="photo-container">
      <Canvas
        onMouseMove={mouseEvent}
        shadowMap
        className="page-container"
        colorManagement
        camera={{ position: [0, 1, 10], fov: 60 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={0.9}
          shadowCameraFar={50}
          shadowCameraTop={10}
          shadowCameraBottom={-10}
          shadowCameraRight={10}
          shadowCameraLeft={-10}
        />
        <pointLight intensity={0.6} position={[-5, 10, 5]} />
        <pointLight intensity={0.6} position={[0, -10, 10]} />
        <pointLight intensity={0.6} position={[5, 0, 8]} />
        <>
          <mesh receiveShadow rotation={[-1.5, 0, 0]} position={[0, y - 1, 0]}>
            <planeBufferGeometry attach="geometry" args={[300, 300]} />
            <shadowMaterial attach="material" opacity={0.7} />
          </mesh>
        </>
        <ThreeJS position={[0, -5, 0]} />
        {moveObject}
        {/* <ThreeJS2
          position={[0, 0.5, 8]}
          args={[1, 1, 1]}
          color="blue"
          frameSpeed={1}
        /> */}
        {/* <Stars
          radius={0}
          depth={10}
          count={200}
          factor={5}
          saturation={0.2}
          fade
        /> */}
      </Canvas>
    </div>
  );
};

export default ThreeController;
