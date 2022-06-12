import styles from "../styles/contact.module.css";
import { useRef } from "react";
import Head from "next/head";

import { AnimatedDots } from "../components/Animated-dots/AnimatedDots";
import { AnimatedLink } from "../components/Animated-link/AnimatedLink";
import { ProgressBar } from "../components/Progress-bar/ProgressBar";

export const Contact = () => {
  const elemRef = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Hall Portfolio | Contact</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedDots />
      <div className={styles.container__titles}>
        <div>
          <h1 className="main-header">Contact.</h1>
          <ProgressBar element={elemRef} />
          <p>Lets get in touch!</p>
          <p>Feel free to use the form or email button below.</p>
          <div className={styles.container__link}>
            <a className={styles.btn} href="mailto:danielhall6189@hotmail.com">
              <span className={styles.btn__text}>Email me!</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container__content} ref={elemRef}>
        <form
          name="contact"
          method="post"
          action="/success"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.row}>
            <div>
              <p>Name*</p>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <p>Email*</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <p>Subject*</p>
              <input
                type="text"
                name="subject"
                placeholder="Enter the subject"
                required
              />
            </div>
            <div>
              <p>Phone number</p>
              <input
                type="email"
                name="number"
                placeholder="Enter your number"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <p>Message*</p>
              <textarea
                type="text"
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
          </div>
          <div className={styles.container__link}>
            <button className={styles.btn} type="submit">
              <span className={styles.btn__text}>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
