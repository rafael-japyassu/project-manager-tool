import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactNotification from 'react-notifications-component';
import Routes from './routes';
import GlobalStyles from './styles/global';

import 'react-notifications-component/dist/theme.css';
import AppProvider from './context';
import AppLayout from './components/AppLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactNotification />
      <AppProvider>
        <AppLayout>
          <Routes />
        </AppLayout>
      </AppProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
