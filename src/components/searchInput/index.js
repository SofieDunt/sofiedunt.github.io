import React, { useState } from 'react';
import './searchInput.css';

/*
props:
- id: string
- onSearch: (query: string) => void
- placeholder: string
*/
function SearchInput(props) {
  const { id, onSearch, placeholder } = props;
  const [lastQuery, setLastQuery] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');

  const onChangeQuery = (event) => {
    setCurrentQuery(event.target.value.trim().toLowerCase());
  };

  const onClickSearch = () => {
    setLastQuery(currentQuery);
    onSearch(currentQuery);
  };

  return (
    <div className={'search-container'}>
      <input
        id={id}
        onChange={onChangeQuery}
        placeholder={placeholder}
      />
      <button
        disabled={lastQuery === currentQuery}
        onClick={onClickSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
