import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './app/container/Container.app';
import GlobalStyles from './app/container/GlobalStyles.app';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Container />
  </React.StrictMode>,
);
