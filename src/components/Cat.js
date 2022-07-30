import React, { memo } from 'react';

const Cat = ({ name, meow }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

export default memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name);
