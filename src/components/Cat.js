import React, { memo } from 'react';

const Cat = ({ name }) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};

export default memo(Cat);
