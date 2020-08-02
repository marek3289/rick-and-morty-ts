import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  margin: 40px 0 65px;
  a {
    margin: 0 15px;
  }
`;

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.dark100};
  color: ${({ theme }) => theme.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.light};
  padding: 2.5px 7.5px;

  :hover {
    color: ${({ theme }) => theme.green};
    border-color: ${({ theme }) => theme.green};
  }
`;

const Pagination: FC<IPagination> = ({ currentPage, info }) => {
  const { prev, next } = info;

  return (
    <StyledWrapper>
      {prev && <StyledLink to={prev.toString() === '1' ? `/` : `/page/${prev}`}>Prev</StyledLink>}
      <StyledLink as="span">{currentPage}</StyledLink>
      {next && <StyledLink to={`/page/${next}`}>Next</StyledLink>}
    </StyledWrapper>
  );
};

export default Pagination;
