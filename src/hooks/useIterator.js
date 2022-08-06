import { useCallback, useMemo } from 'react';
import { useState } from 'react';

const useIterator = ({ items = [], initialIndex = 0 }) => {
  const [index, setIndex] = useState(initialIndex);

  const previous = useCallback(() => {
    if (index === 0) setIndex(items.length - 1);
    else setIndex(index - 1);
  }, [index, items]);

  const next = useCallback(() => {
    if (index === items.length - 1) setIndex(0);
    else setIndex(index + 1);
  }, [index, items]);

  const item = useMemo(() => items[index], [index, items]);

  return [item || items[0], previous, next];
};

export default useIterator;
