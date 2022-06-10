import styles from "../styles/Work.module.css";
import Head from "next/head";
import { useRef } from "react";

import { Works } from "../data/Work";
import { Monitor } from "../components/Monitor/Monitor";
import { HTML } from "../components/svg/Html";
import { Github } from "../components/svg/Github";
import { AnimatedDots } from "../components/Animated-dots/AnimatedDots";
import { AnimatedLink } from "../components/Animated-link/AnimatedLink";
import { ProgressBar } from "../components/Progress-bar/ProgressBar";

export const Work = () => {
  const elemRef = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Hall Portfolio | Work</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedDots />
      <div className={styles.container__titles}>
        <div>
          <h1 className="main-header">Work.</h1>
          <ProgressBar element={elemRef} />
          <p>Check out my selected works.</p>
          <p>Hover the screens and scroll for a quick view!</p>
          <AnimatedLink href="/contact">Get in touch!</AnimatedLink>
        </div>
      </div>
      <div className={styles.container__content} ref={elemRef}>
        {Works.map((project, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.card__text}>
                <h2 className="sub-header">{project.company}</h2>
                <div className={styles.card__links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="link to github"
                  >
                    <Github />
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="link to website"
                  >
                    <HTML />
                  </a>
                </div>
                <h5 className="main-header">{project.id}</h5>
              </div>
              <div className={styles.card__showcase}>
                <div className={styles.card__wrapper}>
                  <Monitor data={project.imgs} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
