import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 200px;

  opacity: 0.1;
  background-color: white;
`;

const Header: FC = () => <StyledHeader>abc</StyledHeader>;

export default Header;
