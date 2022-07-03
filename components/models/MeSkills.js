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
      <group
        position={[0.6, -5, 0.03]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Me.geometry}
          material={materials.Echo}
          position={[13.41, 27.79, 0]}
          scale={1000}
        />
        <mesh
          ref={laptop}
          castShadow
          receiveShadow
          geometry={nodes.Laptop.geometry}
          material={materials["Lollipop Soda"]}
          position={[-17.17, -22.68, 103.1]}
          rotation={[0, 0, 0.49]}
          scale={1000}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/MeSkills.glb");
