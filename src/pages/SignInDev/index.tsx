import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { store } from 'react-notifications-component';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background, Form, FormActions } from './styles';
import ICredentiaslDev from '../../interfaces/credentialsDev';
import useAuth from '../../hooks/auth';

const SignInDev: React.FC = () => {
  const { user, signInDev } = useAuth();

  const [model, setModel] = useState<ICredentiaslDev>({
    email: '',
    password: '',
  });

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value,
      });
    },
    [model],
  );

  const onSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        await signInDev(model);
        store.addNotification({
          title: 'Sucesso!',
          message: 'Usuário autenticado com sucesso!',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      } catch (err) {
        store.addNotification({
          title: 'Erro!',
          message: 'Falha ao autenticar usuário!',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      }
    },
    [model, signInDev],
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Login com Dev</h1>
          <Input
            icon={FaEnvelope}
            placeholder="E-mail"
            type="email"
            name="email"
            value={model.email}
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="Senha"
            isPassword
            type="password"
            name="password"
            value={model.password}
            onChange={updateModel}
          />
          <Button type="submit">Entrar</Button>
          <FormActions>
            <Link to="/sign-up/dev">Faça seu cadastro</Link>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignInDev;
