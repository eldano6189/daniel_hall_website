import { useState, useEffect } from "react";

export const useScrollProgress = (elRef) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollElement = elRef.current;

    const updateProgress = () => {
      const currentScrollProgress = scrollElement.scrollTop;
      const totalScrollHeight =
        scrollElement.scrollHeight - scrollElement.clientHeight;

      const scrollProgress = (currentScrollProgress / totalScrollHeight) * 100;
      setProgress(scrollProgress);
    };

    scrollElement.addEventListener("scroll", updateProgress);

    return () => scrollElement.removeEventListener("scroll", updateProgress);
  });

  return progress;
};
