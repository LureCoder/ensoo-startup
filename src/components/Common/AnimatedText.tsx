"use client";
import { useState, useEffect } from "react";

interface AnimatedTextProps {
  children: string | string[];
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState<string | string[]>(children);

  useEffect(() => {
    // When children changes (language changes), trigger animation
    if (JSON.stringify(displayedText) !== JSON.stringify(children)) {
      // Fade out
      setIsVisible(false);
      
      // Wait for fade out animation to complete
      const timeout = setTimeout(() => {
        // Update text and fade in
        setDisplayedText(children);
        setIsVisible(true);
      }, 300); // Match transition duration

      return () => clearTimeout(timeout);
    }
  }, [children, displayedText]);

  const renderText = (text: string | string[]) => {
    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <span key={index}>
          {line}
          {index < text.length - 1 && <br />}
        </span>
      ));
    }
    return text;
  };

  return (
    <span
      suppressHydrationWarning
      className={`transition-all duration-100 ease-in-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(5px)',
        display: 'inline-block',
        minHeight: '1em',
        transition: 'opacity 100ms ease-in-out, transform 100ms ease-in-out',
      }}
    >
      {renderText(displayedText)}
    </span>
  );
};

export default AnimatedText;
