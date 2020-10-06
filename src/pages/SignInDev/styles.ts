import styled from 'styled-components';

import logo from '../../assets/logo.png';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: stretch;
  background: #111111;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

export const Form = styled.form`
  margin-top: 20px;
  padding: 40px;
  border: 1px solid #373737;
  background: #373737;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const FormActions = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #00e676;
    font-size: 14px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${logo}) no-repeat center;
`;
