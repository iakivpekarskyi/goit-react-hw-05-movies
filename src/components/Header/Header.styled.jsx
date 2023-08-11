import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 18px 36px;
  font-size: 26px;
  border-radius: 15px;
  text-decoration: none;
  color: black;
  font-weight: 300;
  transition: box-shadow 250ms linear, transform 250ms linear;
  &.active {
    color: #ffffff;
    background-color: #ff5656;
  }
  &.hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 8px 0;
  margin-bottom: 26px;
  border-bottom: 1px solid #282828;

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
