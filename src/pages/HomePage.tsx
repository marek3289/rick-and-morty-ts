import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router';

import { Header, CharactersList } from 'components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const HomePage: FC = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: EventType): void => setSearchValue(e.target.value);

  return (
    <StyledWrapper>
      <Header value={searchValue} searchAction={handleSearch} />
      <CharactersList search={searchValue} page={id ? parseInt(id, 10) : undefined} />
    </StyledWrapper>
  );
};

export default HomePage;
