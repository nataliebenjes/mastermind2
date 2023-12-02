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

      <h1>Mastermind</h1>

    </HeaderWrapper>
  );
}

export default Header;

