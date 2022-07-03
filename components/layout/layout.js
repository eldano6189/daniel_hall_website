import styles from "./layout.module.css";

import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { AnimatedDots } from "../Animated-dots/AnimatedDots";
import { SEO } from "../SEO/SEO";

export const Layout = ({ children }) => {
  return (
    <SEO>
      <div className={`${styles.App} dark`}>
        <Header />
        <main className={styles.main}>
          <AnimatedDots />
          {children}
        </main>
        <Footer />
      </div>
    </SEO>
  );
};
