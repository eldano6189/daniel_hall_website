import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function MeSkills({ ...props }) {
  const group = useRef();
  const laptop = useRef();
  const { nodes, materials } = useGLTF("/Models/MeSkills.glb");

  useFrame(
    () => (
      (laptop.current.rotation.x += 0.005), (laptop.current.rotation.y += 0.005)
    )
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Me.geometry}
        material={materials.Echo}
        position={[1.5, -6, 0.0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        ref={laptop}
        castShadow
        receiveShadow
        geometry={nodes.Laptop.geometry}
        material={materials["Lollipop Soda"]}
        position={[-0.5, 0.1, 1.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
    </group>
  );
}

useGLTF.preload("/Models/MeSkills.glb");
