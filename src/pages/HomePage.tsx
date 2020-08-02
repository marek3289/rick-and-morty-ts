import React, { FC, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Header, CharactersList } from 'components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const HomePage: FC = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: EventType): void => setSearchValue(e.target.value);
  console.log(searchValue);

  return (
    <StyledWrapper>
      <Header value={searchValue} serachAction={handleSearch} />
      <CharactersList search={searchValue} page={id ? parseInt(id, 10) : undefined} />
    </StyledWrapper>
  );
};

export default HomePage;
