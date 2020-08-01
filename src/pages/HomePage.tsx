import React, { FC } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import { Header, CharactersList } from 'components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const HomePage: FC = () => {
  return (
    <StyledWrapper>
      <Header />
      <CharactersList />
    </StyledWrapper>
  );
};

export default HomePage;
