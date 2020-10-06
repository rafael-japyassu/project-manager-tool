import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background, Form, FormActions } from './styles';

const SignInClient: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Form>
          <h1>Login com Cliente</h1>
          <Input icon={FaCode} placeholder="Código" type="text" />
          <Button>Entrar</Button>
          <FormActions>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
};

export default SignInClient;
