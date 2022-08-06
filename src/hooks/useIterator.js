import { useState } from 'react';

const useIterator = ({ items = [], initialIndex = 0 }) => {
  const [index, setIndex] = useState(initialIndex);

  const previous = () => {
    if (index === 0) setIndex(items.length - 1);
    setIndex(index - 1);
  };

  const next = () => {
    if (index === items.length - 1) setIndex(0);
    setIndex(index + 1);
  };

  return [items[index], previous, next];
};

export default useIterator;
