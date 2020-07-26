import React, { FC } from 'react';
import styled from 'styled-components';

import { Layout } from 'components/index';

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.someColor};
`;

const App: FC = () => {
  return (
    <Layout>
      <Square />
      <h1>Hello World!</h1>
    </Layout>
  );
};

export default App;
