import React, { useState, useEffect } from 'react';

const TextoAnimado = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
        }, delay);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, text, delay]);

  return <span>{displayText}</span>;
};

export default TextoAnimado;
