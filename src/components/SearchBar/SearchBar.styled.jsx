import styled from 'styled-components';

export const SearchForm = styled(Form)`
  padding: '10px';
  border-radius: '15px';
  font-size: '16px';
  border: '1px solid grey';
`;

export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  line-height: 1.5em;
  border: none;
  outline: none;
  padding: 0 16px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
