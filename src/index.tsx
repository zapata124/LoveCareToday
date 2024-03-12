import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Router from './router';
import { RouterProvider } from 'react-router-dom';
import AuthenticatedUserProvider from './providers/AuthenticatedUserProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthenticatedUserProvider>
        <RouterProvider router={Router} />
      </AuthenticatedUserProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
