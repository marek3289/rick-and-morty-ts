import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme, color }) => (color ? color : theme.dark100)};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default Heading;
