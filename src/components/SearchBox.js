import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return(
    <div className='pa2'>
      <input type='seach' placeholder='Search your Favorite Super Heroe'
        className='pa3 w-50 ba b--green bg-lightest-blue' onChange={searchChange}
        />
    </div>
  )
}
export default SearchBox;
