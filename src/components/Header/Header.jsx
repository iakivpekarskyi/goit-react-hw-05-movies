import React from 'react';
import { Container, Link } from '../../components/Header/Header.styled';

export const Header = () => {
  return (
    <Container>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="movies">Movies Page</Link>
        <Link to="test">Test Page</Link>
      </nav>
    </Container>
  );
};
