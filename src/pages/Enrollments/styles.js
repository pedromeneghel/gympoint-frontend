import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  div.columns {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;

    > div {
      margin-left: 16px;

      &:first-child {
        margin: 0;
      }
    }
  }

  input,
  select {
    width: 100%;
  }
`;
