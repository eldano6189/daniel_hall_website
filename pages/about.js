import styles from "../styles/about.module.css";
import Head from "next/head";

import { AnimatedDots } from "../components/Animated-dots/AnimatedDots";
import { ProgressBar } from "../components/Progress-bar/ProgressBar";
import { AnimatedLink } from "../components/Animated-link/AnimatedLink";
import { AboutMe } from "../data/AboutMe";

import { useRef, Suspense, useState } from "react";
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

export const About = () => {
  const elemRef = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Hall Portfolio | About</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedDots />
      <div className={styles.container__titles}>
        <div>
          <h1 className="main-header">About.</h1>
          <ProgressBar element={elemRef} />
          <p>A little about me!</p>
          <p>Check out my skills and hobbies.</p>
          <AnimatedLink href="/work">See my work!</AnimatedLink>
        </div>
      </div>
      <div className={styles.container__content} ref={elemRef}>
        {AboutMe.map((about, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.card__text}>
                <h2 className="sub-header">{about.header}</h2>
                {about.text.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </div>

              <div className={styles.card__showcase}>
                <div className={styles.card__wrapper}>
                  <Canvas>
                    <directionalLight
                      position={[-20, 20, 20]}
                      penumbra={1}
                      shadow-mapSize={[512, 512]}
                      intensity={0.5}
                      color={"white"}
                      castShadow
                    />
                    <directionalLight
                      position={[20, 20, -30]}
                      penumbra={1}
                      shadow-mapSize={[512, 512]}
                      intensity={0.2}
                      color={"white"}
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
                    <Suspense fallback={<Loader />}>{about.model}</Suspense>
                  </Canvas>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
