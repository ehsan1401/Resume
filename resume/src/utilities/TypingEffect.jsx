import { useState, useEffect } from "react";

const TypingEffect = ({ text , speed , lang }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset on new text

    if (!text || typeof text !== "string") return;

    let index = -1;
    const interval = setInterval(() => {
      // Prevent out-of-bounds or undefined access
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const direction = lang === "fa" ? "rtl" : "ltr";

  return <span dir={direction} className="flex items-center">{displayedText}</span>;
};

export default TypingEffect;
