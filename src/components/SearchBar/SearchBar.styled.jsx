import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: #fff;
  border: 2px solid #d1d1d1;
  border-radius: 16px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  font-size: 58px;

  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 15px;
  line-height: 2.5em;
  border: none;
  outline: none;
  padding: 0 16px;

  &::placeholder {
    font: inherit;
    font-size: 19px;
  }
`;
