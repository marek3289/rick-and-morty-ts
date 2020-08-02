import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Heading, mixins } from 'styles';

const StyledPreview = styled(Link)`
  ${mixins.flexColumn};
  margin: 30px;
  height: 230px;

  background-color: ${({ theme }) => theme.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 2px 2px 4px 4px ${({ theme }) => theme.dark100};
  color: ${({ theme }) => theme.dark100};
  transition: transform 0.1s ease-in;
  text-align: center;
  cursor: pointer;

  :hover {
    transform: translateY(-5px);
  }

  .heading-span {
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-right: 5px;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 15px 0;
  }
`;

const CharacterPreview: FC<{ character: ICharacter }> = ({ character }) => {
  const { name, id, image } = character;

  return (
    <StyledPreview to={`/character/${id}`}>
      <Heading>
        <span className="heading-span">{id}.</span>
        {name}
      </Heading>
      <img alt={name} src={image} />
    </StyledPreview>
  );
};

export default CharacterPreview;
