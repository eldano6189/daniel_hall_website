import styles from "../styles/about.module.css";
import Head from "next/head";

import { ProgressBar } from "../components/Progress-bar/ProgressBar";
import { AnimatedLink } from "../components/Animated-link/AnimatedLink";
import { AboutMe } from "../data/AboutMe";
import { ModelScene } from "../components/model-scene/ModelScene";

import { useRef } from "react";

export const About = () => {
  const elemRef = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Hall Portfolio | About</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  <ModelScene>{about.model}</ModelScene>
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
