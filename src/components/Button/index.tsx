import React from 'react';

import { Container } from './styles';

const Button: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
