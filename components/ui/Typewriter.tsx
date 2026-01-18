"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  className = "",
  cursor = true,
}: TypewriterProps & { loop?: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  // Hydration fix: only render dynamic content after mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const handleType = () => {
      const current = displayedText;
      const fullText = text;

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, current.length - 1));
      } else {
        setDisplayedText(fullText.substring(0, current.length + 1));
      }

      if (!isDeleting && current === fullText) {
        if (loop) {
          setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
        }
      } else if (isDeleting && current === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, started, text, speed, loop]);

  if (!mounted) {
    return (
      <span className={className}>
        {/* Render space to maintain height during SSR/initial render */}
        {"\u00A0"} 
      </span>
    );
  }

  return (
    <span className={className}>
      {displayedText || "\u00A0"}
      {cursor && (
        <span className="animate-pulse ml-1">|</span>
      )}
    </span>
  );
}
