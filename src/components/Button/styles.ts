import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 10px;
  cursor: pointer;
  width: 300px;
  height: 42px;
  border-radius: 4px;
  border: 0;
  background: #00e676;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#00e676')};
  }
`;
