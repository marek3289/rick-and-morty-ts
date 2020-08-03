import React, { FC } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import { mergeArrayByField } from "@apollo/client/utilities";
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'styles';

const API_URL = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const Layout: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ApolloProvider client={client}>{children}</ApolloProvider>
  </ThemeProvider>
);

export default Layout;
