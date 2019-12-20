import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 30px;
  height: 64px;
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 30px;
      border-right: 1px solid #ddd;
      margin-right: 30px;
    }

    a {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 15px;
      color: #999;
      transition: color 0.2s;

      & + a {
        margin-right: 20px;
      }

      &:hover {
        color: ${darken(0.2, '#999')};
      }
    }
  }
`;

export const Profile = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;

  a {
    color: #de3b3b;
    font-size: 14px;
    transition: color 0.2s;

    &:hover {
      color: ${darken(0.2, '#de3b3b')};
    }
  }

  strong {
    color: #666;
    margin-bottom: 3px;
  }
`;
