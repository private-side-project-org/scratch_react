import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const ThreeJS2 = ({ position }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <>
      <mesh position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="purple" />
      </mesh>
    </>
  );
};

export default ThreeJS2;
