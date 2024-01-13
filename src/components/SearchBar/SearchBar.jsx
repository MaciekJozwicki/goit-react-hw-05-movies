import { useState } from 'react';
const SearchBar = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      onSubmit={e => {
        console.log(e.target);
        e.preventDefault();
        setSearchValue(inputValue);
      }}
    >
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
