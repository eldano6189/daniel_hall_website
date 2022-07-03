import { Suspense } from "react";

import { ContactShadows, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <p>{progress.toFixed(0)}%</p>
    </Html>
  );
};

export const ModelScene = ({ children }) => {
  return (
    <Canvas>
      <directionalLight
        position={[-20, 20, 10]}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        intensity={0.8}
        color={"white"}
        castShadow
      />
      <directionalLight
        position={[20, 20, -20]}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        intensity={0.8}
        color={"#09ff00"}
        castShadow
      />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1.4, 0]}
        opacity={0.75}
        width={10}
        height={10}
        blur={2.6}
        far={2}
      />

      <Suspense fallback={<Loader />}>{children}</Suspense>
    </Canvas>
  );
};
