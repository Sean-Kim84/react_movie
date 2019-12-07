import React from 'react';
import { StyledLeadMoreBtn } from '../styles/StyledLeadMoreBtn';

const LoadMoreBtn = ({text, callback}) => {
  return (
    <StyledLeadMoreBtn type="text" onClick={callback}>
      {text}
    </StyledLeadMoreBtn>
  );
};

export default LoadMoreBtn;
