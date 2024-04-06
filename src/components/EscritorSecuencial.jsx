import React, { useState, useEffect } from 'react';

const EscritorSecuencial = ({ words, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); // Estado para controlar la visibilidad del cursor

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[currentWordIndex];
      if (currentCharIndex < currentWord.length) {
        setDisplayText(prevText => prevText + currentWord[currentCharIndex]);
        setCurrentCharIndex(prevIndex => prevIndex + 1);
        setShowCursor(false); // Ocultar el cursor mientras se está escribiendo
      } else {
        clearInterval(interval);
        setShowCursor(true); // Mostrar el cursor cuando termine de escribir
        setTimeout(() => {
          if (currentWordIndex === words.length - 1) {
            setCurrentWordIndex(0);
          } else {
            setCurrentWordIndex(prevIndex => prevIndex + 1);
          }
          setDisplayText('');
          setCurrentCharIndex(0);
        }, delay);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentWordIndex, delay, words]);

  return (
    <div className='inline-block pr-1 border-2 border-l-0 border-t-0 border-b-0 border-r-indigo-400'>
      <span>{displayText}</span>
      {showCursor && <span></span>}
    </div>
  );
};

export default EscritorSecuencial;
