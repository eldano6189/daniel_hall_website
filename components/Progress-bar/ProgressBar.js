import styles from "./ProgressBar.module.css";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export const ProgressBar = ({ element }) => {
  const progress = useScrollProgress(element);

  return (
    <div className={styles.progressBar}>
      <div className={styles.scroller} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
