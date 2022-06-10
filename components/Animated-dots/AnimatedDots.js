import styles from "./AnimatedDots.module.css";

export const AnimatedDots = () => {
  return (
    <div className={styles.container__dots}>
      <ul className={styles.dots}>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
      </ul>
      <ul className={styles.dots}>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
      </ul>
      <ul className={styles.dots}>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
        <li className={styles.dot}></li>
      </ul>
    </div>
  );
};
