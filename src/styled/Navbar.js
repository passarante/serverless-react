import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
`;

export const StyledNavbarBrand = styled.div`
  font-size: 1.4rem;
  & > a {
    text-decoration: none;
  }
`;

export const StyledNavItems = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 500ms;
  &:hover {
    color: #e16365;
  }
`;


