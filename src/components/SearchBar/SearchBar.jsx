import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

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
