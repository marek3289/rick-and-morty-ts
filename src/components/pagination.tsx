import React, { FC } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 40px 0 65px;
  button {
    margin: 0 15px;
  }
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.dark100};
  color: ${({ theme }) => theme.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.light};
  padding: 5px 10px;
  outline: none;
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  :hover {
    color: ${({ theme, disabled }) => !disabled && theme.green};
    border-color: ${({ theme, disabled }) => !disabled && theme.green};
  }

  :active {
    transform: translateY(1px);
  }
  :disabled {
    opacity: 0.5;
  }
`;

const Pagination: FC<IPagination> = ({ pageInfo, setPage, isLoading = false }) => {
  const updatePage = (newPage: PageNumberType) => setPage(newPage);

  const next: PageNumberType = pageInfo?.next;
  const prev: PageNumberType = pageInfo?.prev;

  return (
    <StyledWrapper>
      <StyledButton disabled={!prev || isLoading} onClick={() => updatePage(prev)}>
        Prev
      </StyledButton>
      <StyledButton disabled={!next || isLoading} onClick={() => updatePage(next)}>
        Next
      </StyledButton>
    </StyledWrapper>
  );
};

export default Pagination;
