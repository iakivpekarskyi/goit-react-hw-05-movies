import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmCardContainer = styled.div`
  padding: 16px;

  width: 250px;
`;

export const FilmImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 19px;

  text-align: center;
  display: inline-block;
  vertical-align: middle;
`;
