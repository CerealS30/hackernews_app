import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// 2
const httpLink = createHttpLink({
  uri: 'http://34.125.103.71/graphql/'
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
 <BrowserRouter>
   <ApolloProvider client={client}>
     <App />
   </ApolloProvider>
 </BrowserRouter>,
 document.getElementById('root')
);
