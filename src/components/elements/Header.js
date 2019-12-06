import React from 'react';
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import { StyleHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styles/StyledHeader';

const Header = () => (
  <StyleHeader>
    <div>
      <div className="header-content">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div> 
    </div>
  </StyleHeader>
)

export default Header;