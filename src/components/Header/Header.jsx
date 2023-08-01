import React from 'react';
import { Container, Link } from '../../components/Header/Header.styled';

const Header = () => {
  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </nav>
    </Container>
  );
};

export default Header;
