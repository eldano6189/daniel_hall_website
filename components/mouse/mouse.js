import { useEffect, useState } from "react";
import styles from "./mouse.module.css";

const Mouse = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const currentDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  const cursorOffScreen = (e) => {
    if (
      e.clientY <= 0 ||
      e.clientX <= 0 ||
      e.clientX >= window.innerWidth ||
      e.clientY >= window.innerHeight
    ) {
      setIsOnScreen(true);
    }
  };

  const cursorOnScreen = (e) => {
    if (
      e.clientY > 0 ||
      e.clientX > 0 ||
      e.clientX < window.innerWidth ||
      e.clientY < window.innerHeight
    ) {
      setIsOnScreen(false);
    }
  };

  const mouseMove = (e) => {
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    return setPosX(mouseX), setPosY(mouseY);
  };

  const mouseDown = () => {
    setClicked(true);
  };

  const mouseUp = () => {
    setClicked(false);
  };

  const mouseHover = (e) => {
    if (
      e.target.localName === "a" ||
      e.target.localName === "button" ||
      e.target.localName === "span" ||
      e.target.localName === "svg" ||
      e.target.localName === "path"
    ) {
      setHovered(true);
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", setIsMobile(currentDevice));
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => mouseMove(e));
    document.addEventListener("mousedown", () => mouseDown());
    document.addEventListener("mouseup", () => mouseUp());
    document.addEventListener("mouseleave", (e) => cursorOffScreen(e));
    document.addEventListener("mouseenter", (e) => cursorOnScreen(e));
    document.addEventListener("mouseover", (e) => mouseHover(e));

    return (
      () => document.removeEventListener("mousemove", mouseMove),
      document.removeEventListener("mousedown", mouseDown),
      document.removeEventListener("mouseup", mouseUp),
      document.removeEventListener("mouseleave", cursorOffScreen),
      document.removeEventListener("mouseenter", cursorOnScreen),
      document.removeEventListener("mouseover", mouseHover)
    );
  }, []);

  return (
    <div
      className={styles.outer}
      style={{
        opacity: isOnScreen ? "0" : "1",
        display: isMobile ? "none" : "flex",
        transform: `scale(${hovered ? "2" : "1"})`,
        left: `${posX}px`,
        top: `${posY}px`,
      }}
    >
      <div
        className={styles.inner}
        style={{
          transform: `scale(${clicked ? "0.2" : "0.8"})`,
          opacity: hovered ? "0" : "1",
        }}
      ></div>
    </div>
  );
};

export default Mouse;
