import React, { useCallback, useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { store } from 'react-notifications-component';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/auth';
import IClient from '../../interfaces/client';
import api from '../../services/api';

import { Container, Table, ActionButton, ActionsContainer } from './styles';

const Clients: React.FC = () => {
  const { token } = useAuth();
  const [clients, setClients] = useState<IClient[]>([]);

  const loadClients = useCallback(async () => {
    try {
      const Authorization = `Bearer ${token}`;
      const response = await api.get('/clients', {
        headers: { Authorization },
      });
      setClients(response.data);
    } catch (err) {
      store.addNotification({
        title: 'Erro!',
        message: 'Falha ao listar clientes!',
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
  }, [token]);

  useEffect(() => {
    loadClients();
  }, [loadClients]);

  return (
    <Container>
      <PageHeader
        title="Clientes"
        action={() => {
          console.log('Novo cliente');
        }}
        buttonText="Novo cliente"
      />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client?.id}>
              <td>{client?.name}</td>
              <td>{client?.email}</td>
              <td>{client?.telephone}</td>
              <td>
                <ActionsContainer>
                  <ActionButton color="#1565c0">
                    <FaEdit />
                  </ActionButton>
                  <ActionButton color="#c62828">
                    <FaTrashAlt />
                  </ActionButton>
                </ActionsContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Clients;
