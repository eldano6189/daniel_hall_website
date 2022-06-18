import styles from "./layout.module.css";
import { useContext } from "react";
import { Context } from "../../context/context";

import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { AnimatedDots } from "../Animated-dots/AnimatedDots";

export const Layout = ({ children }) => {
  const { darkMode } = useContext(Context);

  return (
    <div className={`${styles.App} dark`}>
      <Header />
      <main className={styles.main}>
        <AnimatedDots />
        {children}
      </main>
      <Footer />
    </div>
  );
};
