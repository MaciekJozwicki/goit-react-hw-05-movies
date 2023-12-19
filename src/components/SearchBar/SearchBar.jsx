const SearchBar = ({ setSearchValue }) => {
  return (
    <input
      onChange={e => {
        e.preventDefault();
        setSearchValue(e.target.value);
      }}
    />
  );
};
export default SearchBar;
