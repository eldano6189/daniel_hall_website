import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Uniform({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Models/Uniform.glb");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = (1 + Math.sin(time / 1.5)) / 4;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Uniform_1.geometry}
        material={materials["Floral Scent 1"]}
        position={[0, -9.5, 0.01]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.07}
      />
    </group>
  );
}

useGLTF.preload("/Models/Uniform.glb");
