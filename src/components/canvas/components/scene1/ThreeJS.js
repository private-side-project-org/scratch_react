import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ThreeJS = ({ position }) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <>
      <mesh ref={mesh} position={position}>
        <torusKnotBufferGeometry attach="geometry" args={[100, 0, 500, 0]} />
        <meshStandardMaterial
          metalness={0.4}
          roughness={0.4}
          attach="material"
          color={0x167699}
          emissive={0xa0a1c}
        />
      </mesh>
    </>
  );
};

export default ThreeJS;
