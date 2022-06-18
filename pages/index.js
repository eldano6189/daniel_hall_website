import styles from "../styles/Home.module.css";
import Head from "next/head";

import { AnimatedLink } from "../components/Animated-link/AnimatedLink";
import { ModelScene } from "../components/model-scene/ModelScene";
import MeHead from "../components/models/Head";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Hall Portfolio | Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.grid}>
        <div className={styles.greeting}>
          <h1 className="main-header">Hello.</h1>
          <h2 className="sub-header">
            My name is Daniel Hall,
            <br />A front-end React developer.
          </h2>
          <AnimatedLink href="/work">See my work!</AnimatedLink>
        </div>
        <div className={styles.container__model}>
          <ModelScene>
            <MeHead />
          </ModelScene>
        </div>
      </div>
    </div>
  );
};

export default Home;
