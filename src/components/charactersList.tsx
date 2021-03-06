import React, { FC } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import { CharacterPreview, Pagination } from 'components';
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
  query($page: Int!, $search: String) {
    characters(page: $page, filter: { name: $search }) {
      results {
        id
        name
        image
      }
      info {
        pages
        next
        prev
      }
    }
  }
`;

const CharactersList: FC<IListProps> = ({ search, page, setPage }) => {
  const { loading, error, data } = useQuery<{ characters: IResults }, ICharacterVars>(query, {
    variables: { page, search },
  });

  return (
    <StyledWrapper>
      <StyledList>
        {data?.characters.results.map((char: ICharacter) => (
          <li key={char.id}>
            <CharacterPreview character={char} />
          </li>
        ))}
      </StyledList>

      {data && <Pagination pageInfo={data?.characters.info} setPage={setPage} isLoading={loading} />}

      {loading && !data && <img src={spinner} className="state-info" alt="loading_spinner" />}
      {error && (
        <Heading color="red" className="state-info">
          {error.message}
        </Heading>
      )}
    </StyledWrapper>
  );
};

export default CharactersList;
