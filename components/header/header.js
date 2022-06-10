import styles from "./header.module.css";
import { Logo } from "../svg/Logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
