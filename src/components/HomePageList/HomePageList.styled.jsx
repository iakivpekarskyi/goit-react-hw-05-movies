import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const FilmLink = styled(Link)`
  font-size: 20px;
  line-height: 2em;
  text-decoration: none;
  color: #4b4b4b;
`;
