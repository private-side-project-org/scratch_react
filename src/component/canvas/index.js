import React from 'react';
import { Canvas } from 'react-three-fiber';
import ThreeJS from './ThreeJS';
import ThreeJS2 from './ThreeJS2';

const RootCanvas = () => (
  <div className="photo-container">
    <Canvas
      className="page-container"
      colorManagement
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />
      <ThreeJS position={[0, -5, 0]} />
      <ThreeJS2 position={[0, 1, 0]} />
      <ThreeJS2 position={[-2, 1, -5]} />
      <ThreeJS2 position={[5, 1, -2]} />
    </Canvas>
  </div>
);

export default RootCanvas;
