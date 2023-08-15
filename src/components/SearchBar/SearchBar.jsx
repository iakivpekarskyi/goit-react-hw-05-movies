import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { SearchForm, SearchInput, SearchButton } from './SearchBar.styled';
import { SiThemoviedatabase } from 'react-icons/si';

const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <Formik
        initialValues={{ input: '' }}
        onSubmit={({ input }, { resetForm }) => {
          if (input.trim() === '') return;
          handleSearch(input);
          resetForm();
        }}
      >
        <SearchForm>
          <SearchInput
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SearchButton type="submit">
            <SiThemoviedatabase />
          </SearchButton>
        </SearchForm>
      </Formik>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
