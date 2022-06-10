import styles from "./AnimatedLink.module.css";
import Link from "next/link";

export const AnimatedLink = ({ children, href }) => {
  return (
    <div className={styles.container__link}>
      <Link href={href}>
        <a className={styles.btn}>
          <span className={styles.btn__text}>{children}</span>
        </a>
      </Link>
    </div>
  );
};
