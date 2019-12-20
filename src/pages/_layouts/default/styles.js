import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #f5f5f5;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;
  width: 900px;

  section.title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 20px 0;

    h1 {
      font-size: 24px;
      color: #444;
    }
  }

  section.content {
    background: #fff;
    border-radius: 4px;
    padding: 30px;

    table {
      border-collapse: collapse;
      width: 100%;

      thead tr th {
        color: #444;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 5px;

        &:first-child {
          text-align: left;
        }
      }

      tbody tr td {
        color: #666;
        font-size: 16px;
        text-align: center;
        padding: 16px 0;

        &:first-child {
          text-align: left;
        }

        &:last-child {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .edit {
          color: #4d85ee;

          &:hover {
            color: ${darken(0.1, '#4d85ee')};
          }
        }

        .delete {
          color: #de3b3b;
          &:hover {
            color: ${darken(0.1, '#de3b3b')};
          }
        }
      }

      tbody tr {
        border-bottom: 1px solid #eee;
        &:last-child {
          border: none;
        }
      }
    }
  }
`;
