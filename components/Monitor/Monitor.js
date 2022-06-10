import styles from "./Monitor.module.css";
import Image from "next/image";

export const Monitor = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.screenOuter}>
        <div className={styles.screenInner}>
          <Image
            priority
            src={`/images/Work-images/${data[0].desktop.img}`}
            alt="company website"
            layout="responsive"
            height={data[0].desktop.height}
            width={data[0].desktop.width}
          />
        </div>
      </div>
      <div className={styles.mobileOuter}>
        <div className={styles.mobileInner}>
          <Image
            priority
            src={`/images/Work-images/${data[0].mobile.img}`}
            alt="company website"
            layout="responsive"
            height={data[0].mobile.height}
            width={data[0].mobile.width}
          />
        </div>
      </div>
    </div>
  );
};
