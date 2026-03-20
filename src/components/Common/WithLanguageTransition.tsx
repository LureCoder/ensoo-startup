"use client";
import { useState, useEffect } from "react";

interface WithLanguageTransitionProps {
  language: string;
  children: React.ReactNode;
  className?: string;
}

const WithLanguageTransition: React.FC<WithLanguageTransitionProps> = ({ 
  language, 
  children, 
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // When language changes, trigger animation
    setIsVisible(false);
    // Wait for the fade out animation to complete
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [language]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(5px)',
      }}
    >
      {children}
    </div>
  );
};

export default WithLanguageTransition;