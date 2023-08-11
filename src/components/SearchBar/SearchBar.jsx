import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search movies" />
      </form>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
