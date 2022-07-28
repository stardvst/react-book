import React from 'react';
import { useEffect } from 'react';

const WordCount = ({ children }) => {
  const words = children.split(' ');
  useEffect(() => {
    console.log(`attention!!! rendering ${words.length} words`);
  }, [words]);

  return (
    <div>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </div>
  );
};

export default WordCount;
