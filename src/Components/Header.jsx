import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
`;



function Header() {
  return (
    <HeaderWrapper>

      <h1>Welcome to the Mastermind game! </h1>
      <h2>Can you crack the code?</h2>

    </HeaderWrapper>
  );
}

export default Header;

