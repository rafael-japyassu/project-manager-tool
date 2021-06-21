import React, { useCallback } from 'react';
import useAuth from '../../hooks/auth';

import { Container, Avatar } from './styles';

const UserInfo: React.FC = () => {
  const { user } = useAuth();

  const formatName = useCallback(() => {
    const nameSplited = user.name.split(' ');

    if (nameSplited.length > 1) {
      return `${nameSplited[0].charAt(0)}${nameSplited[1].charAt(
        0,
      )}`.toUpperCase();
    }
    return nameSplited[0].charAt(0).toUpperCase();
  }, [user]);

  return (
    <Container>
      <Avatar>{formatName()}</Avatar>
      <span>{user.name}</span>
    </Container>
  );
};

export default UserInfo;
