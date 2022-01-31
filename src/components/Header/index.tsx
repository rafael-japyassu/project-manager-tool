import React from 'react';

import { useHistory } from 'react-router-dom';
import { FaCubes, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { Container, Logo, Menu } from './styles';

import logo from '../../assets/logo.png';
import HeaderMenuItem from '../HeaderMenuItem';
import useAuth from '../../hooks/auth';
import UserInfo from '../UserInfo';

const Header: React.FC = () => {
  const { push } = useHistory();
  const { signOut } = useAuth();

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <Menu>
        <HeaderMenuItem
          title="Dashboard"
          icon={FaHome}
          action={() => {
            push('/dashboard');
          }}
        />
        <HeaderMenuItem
          title="Clientes"
          icon={FaUsers}
          action={() => {
            push('/clients');
          }}
        />
        <HeaderMenuItem
          title="Projetos"
          icon={FaCubes}
          action={() => {
            push('/projects');
          }}
        />
        <HeaderMenuItem title="Sair" icon={FaSignOutAlt} action={signOut} />
        <UserInfo />
      </Menu>
    </Container>
  );
};

export default Header;
