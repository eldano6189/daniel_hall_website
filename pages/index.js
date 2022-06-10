import styles from "../styles/home.module.css";
import Head from "next/head";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Hall Portfolio | Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
