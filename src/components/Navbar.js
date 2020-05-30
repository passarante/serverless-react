import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavItems,
  StyledLink
} from '../styled/Navbar';
import { Accent } from '../styled/Random';
const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarBrand>
        <Link to="/">
          Learn.Build. <Accent>Type.</Accent>
        </Link>
      </StyledNavbarBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">High Scores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
