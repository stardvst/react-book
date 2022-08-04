import { useState } from 'react';

const SearchForm = ({ value, onSearch }) => {
  const [search, setSearch] = useState(value);

  return (
    <input
      type="text"
      value={search}
      onChange={e => {
        setSearch(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
};

export default SearchForm;
