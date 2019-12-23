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

    .actionBar {
      display: flex;
      flex-direction: row;

      .search {
        margin-left: 16px;

        input {
          color: #999;
          padding-left: 45px;
        }

        i {
          position: relative;
          svg {
            color: #999;
            position: absolute;
            left: 16px;
            top: -4px;
          }
        }
      }
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

        svg {
          color: ${props => (props.active === 'false' ? '#42CB59' : '#ddd')};
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

    .modal-window {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.7);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s;
      &:target {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
      }
      & > div {
        width: 450px;
        border-radius: 4px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2em;
        background: #ffffff;
        padding: 30px;
        display: flex;
        flex-direction: column;
      }
      header {
        font-weight: bold;
      }
      h2 {
        text-transform: uppercase;
        font-size: 14px;
        color: #444;
        margin-bottom: 10px;
      }
      p {
        color: #666;
        line-height: 26px;
        font-size: 16px;
        margin-bottom: 23px;
      }
      textarea {
        margin-bottom: 21px;
      }
    }

    .modal-close {
      color: #aaa;
      line-height: 50px;
      font-size: 80%;
      position: absolute;
      right: 10px;
      text-align: center;
      top: 10px;
      width: 70px;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
  }
`;
