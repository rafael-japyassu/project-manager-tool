import React from 'react';
import Button from '../Button';

import { Container } from './styles';

interface PageHeaderProps {
  title: string;
  action(): void;
  buttonText: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  action,
  buttonText,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Button onClick={() => action()}>{buttonText}</Button>
    </Container>
  );
};

export default PageHeader;
