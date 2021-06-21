import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface IProps {
  title: string;
  icon: ComponentType<IconBaseProps>;
  action(): void;
}

const HeaderMenuItem: React.FC<IProps> = props => {
  const { action, icon: Icon, title } = props;
  return (
    <Container title={title} onClick={action}>
      <Icon />
    </Container>
  );
};

export default HeaderMenuItem;
