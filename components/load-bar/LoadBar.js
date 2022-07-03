import styles from "./LoadBar.module.css";

export const LoadBar = ({ progress }) => {
  return (
    <div className={styles.container__loader}>
      <div className={styles.loader}>
        <div
          className={styles.bar}
          style={{ width: `${progress.toFixed(0)}%` }}
        ></div>
      </div>
    </div>
  );
};
