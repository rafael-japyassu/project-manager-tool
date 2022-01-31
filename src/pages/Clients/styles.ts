import styled from 'styled-components';

interface ActionButtonProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.75rem;

  td {
    text-align: center;
    padding: 1rem 1.5rem;
    border: 0;
    background: #373737;

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 4px;
  transition: 0.2s;

  svg {
    color: #fff;
  }

  &:active {
    transform: scale(0.9);
  }
`;
