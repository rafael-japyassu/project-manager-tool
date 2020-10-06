import React, { useCallback } from 'react';
import { FaCode, FaUsers } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Container, EntryCard, EntryCardItem } from './styles';

import logo from '../../assets/logo.png';

const Start: React.FC = () => {
  const history = useHistory();

  const navigate = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],
  );

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <EntryCard>
        <EntryCardItem onClick={() => navigate('/sign-in/dev')}>
          <FaCode size={50} />
          <span>Entrar como Dev</span>
        </EntryCardItem>
        <EntryCardItem
          color="#fff"
          background="#111111"
          onClick={() => navigate('/sign-in/client')}
        >
          <FaUsers size={50} />
          <span>Entrar como Cliente</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
};

export default Start;
