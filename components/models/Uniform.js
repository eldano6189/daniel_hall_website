import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
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
        geometry={nodes.Merged_Objects.geometry}
        material={materials["Niagara 1"]}
        position={[0, -8, 0.01]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.06}
      />
    </group>
  );
}

useGLTF.preload("/Models/Uniform.glb");
