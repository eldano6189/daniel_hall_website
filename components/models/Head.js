import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Head({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Models/Head.glb");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.position.y = (1 + Math.sin(time / 1.5)) / 6;
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Merged_Objects.geometry}
        material={materials.Echo}
        position={[0, -2.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.02}
      />
    </group>
  );
}

useGLTF.preload("/Models/Head.glb");