import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  max-width: 1000px;
  padding: 20px 0;
  margin: 0 auto;
`;

export const MovieCard = styled.div`
  display: flex;
`;

export const Picture = styled.img`
  width: 250px;
  height: fit-content;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 40px;
  width: 120px;
  background: #ffffff;
  color: #383838;
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid #383838;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  padding: 12px 26px;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 15px;
  border-radius: 16px;
  border: 0.5px solid #b3b2b2;
  text-decoration: none;
  color: #474545;
  font-weight: 600;
  transition: box-shadow 250ms linear, transform 250ms linear;
  &:active {
    color: #222020;
    background-color: #6d6d6d;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const Data = styled.div`
  padding: 20px;
`;

export const Meta = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;
