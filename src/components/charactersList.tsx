import React, { FC } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import { CharacterPreview } from 'components';
import { Heading, mixins } from 'styles';
import spinner from '../assets/spinner.gif';

const StyledWrapper = styled.main`
  ${mixins.flexColumn};
  .state-info {
    margin: 10%;
  }
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  width: 100%;
`;

const query = gql`
  query($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
      info {
        pages
      }
    }
  }
`;

const CharactersList: FC<{ page?: number }> = ({ page = 1 }) => {
  const { loading, error, data } = useQuery<ICharactersList, ICharacterVars>(query, {
    variables: { page },
  });

  return (
    <StyledWrapper>
      <StyledList>
        {data?.characters.results.map((char) => (
          <li key={char.id}>
            <CharacterPreview character={char} />
          </li>
        ))}
      </StyledList>

      {loading && !error && <img src={spinner} className="state-info" alt="loading_spinner" />}
      {!loading && error && (
        <Heading color="red" className="state-info">
          {error}
        </Heading>
      )}
    </StyledWrapper>
  );
};

export default CharactersList;
