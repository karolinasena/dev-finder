import { useState } from 'react';
import { SearchContainer } from './style';

export function Search({ setUsername }) {

  const [typedUser, setTypedUser] = useState('');

  function handleSearch(e) {
   e.preventDefault();
   setUsername(typedUser);
   setTypedUser('');

  }

  return (
   <SearchContainer>
      <input type="text" id="search" placeholder="Search Github username" value={typedUser} onChange={(e) => setTypedUser(e.target.value)}/>
      <button type="submit" onClick={handleSearch}>Search</button>
    </SearchContainer> 
  );
}