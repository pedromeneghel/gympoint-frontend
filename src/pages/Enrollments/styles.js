import styled from 'styled-components';

export const FormContent = styled.div`
  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      & + div {
        margin-left: 16px;
      }
    }

    input,
    select {
      margin-bottom: 20px;
      width: 100%;
    }
  }
`;
