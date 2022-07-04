import { AnimatedLink } from "../components/Animated-link/AnimatedLink";
import styles from "../styles/success.module.css";

export const Success = () => {
  return (
    <div className={styles.page}>
      <h2 className="main-header">Thank-you!</h2>
      <p>I will be in touch as soon as i can</p>
      <AnimatedLink href="/">Home</AnimatedLink>
    </div>
  );
};

export default Success;
