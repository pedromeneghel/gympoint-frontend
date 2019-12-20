import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  background: #ee4d64;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 90%;
  width: 540px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.5);
  padding: 30px;

  img {
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 20px;
    }
  }
`;
