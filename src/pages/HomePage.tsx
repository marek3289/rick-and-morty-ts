import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Header, CharactersList } from 'components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const HomePage: FC = () => {
  const { id } = useParams<{ id: string | undefined }>();

  return (
    <StyledWrapper>
      <Header />
      <CharactersList page={id ? parseInt(id, 10) : undefined} />
    </StyledWrapper>
  );
};

export default HomePage;
