import React from 'react';
import { Link } from '@reach/router';
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import { StyleHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styles/StyledHeader';

const Header = () => (
  <StyleHeader>
    <div>
      <Link to="/">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <div className="header-content">
        
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div> 
    </div>
  </StyleHeader>
)

export default Header;