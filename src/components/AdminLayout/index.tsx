import React from 'react';
import Header from '../Header';

import { Container, Main } from './styles';

const AdminLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default AdminLayout;
