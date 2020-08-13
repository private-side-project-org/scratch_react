import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { MeshWobbleMaterial } from 'drei';

const ThreeJS2 = ({ position, args, color, frameSpeed }) => {
  const mesh = useRef(null);
  useFrame(
    () =>
      (mesh.current.rotation.x = mesh.current.rotation.y += frameSpeed / 100)
  );
  return (
    <>
      <mesh castShadow position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          attach="material"
          color={color}
          metalness={0.5}
          roughness={0.3}
          speed={1}
          factor={3}
        />
      </mesh>
    </>
  );
};

export default ThreeJS2;
