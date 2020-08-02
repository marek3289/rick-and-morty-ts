import React, { FC } from 'react';
import styled from 'styled-components';

import { mixins } from 'styles';
import searchIcon from 'assets/search-icon.svg';

const StyledHeader = styled.header`
  ${mixins.flexColumn};

  background-color: ${({ theme }) => theme.dark200};
  width: 100%;
  height: 200px;
`;

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 25px;
`;

const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  margin: 0 10px;
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.dark200};
  border: 1px solid ${({ theme }) => theme.dark100};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 5px center;
  padding: 10px 5px 10px 28px;
  ::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

const Header: FC<IHeader> = ({ value, serachAction }) => {
  return (
    <StyledHeader>
      <StyledHeading>Find Rick and Morty Character!</StyledHeading>
      <StyledInput type="search" value={value} placeholder="eg. Rick Sanchez" onChange={serachAction} />
    </StyledHeader>
  );
};

export default Header;
