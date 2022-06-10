import styles from "./footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { Links } from "../../data/links";

export const Footer = () => {
  const [navState, setNavState] = useState(0);
  const navLinkWidth = 4;

  const router = useRouter();

  useEffect(() => {
    router.pathname === "/"
      ? setNavState(0)
      : router.pathname === "/about"
      ? setNavState(1)
      : router.pathname === "/work"
      ? setNavState(2)
      : router.pathname === "/contact"
      ? setNavState(3)
      : null;
  }, [router]);

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <span
          className={styles.nav__slider}
          style={{
            width: `calc((100% / ${navLinkWidth}))`,
            transform: `translateX(${navState}00%)`,
          }}
        />
        {Links.map((link, index) => {
          const navHandler = () => {
            setNavState(index);
          };

          return (
            <Link href={link.href} key={index}>
              <a onClick={navHandler}>{link.name}</a>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};
