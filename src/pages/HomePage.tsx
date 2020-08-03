import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Header, CharactersList } from 'components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const HomePage: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = (e: EventType): void => {
    setPageNumber(1);
    setSearchValue(e.target.value);
  };

  return (
    <StyledWrapper>
      <Header value={searchValue} searchAction={handleSearch} />
      <CharactersList search={searchValue} page={pageNumber} setPage={setPageNumber} />
    </StyledWrapper>
  );
};

export default HomePage;
