import React from 'react';

const List = ({ data = [], renderItem, renderEmpty }) => {
  if (!data.length) return renderEmpty;

  return (
    <ul>
      {data.map((item, idx) => (
        <li key={idx}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
