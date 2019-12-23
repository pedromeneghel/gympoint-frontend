import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  label {
    text-transform: uppercase;
    color: #444;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input, textarea {
    border-radius: 4px;
    border: 1px solid #dddddd;
    background: #fff;
    font-size: 16px;
    color: #999;
    padding: 15px;
  }

  button {
    cursor: pointer;
  }

  button.primary {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background: #EE4D64;
    border: none;
    padding: 13px;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#EE4D64')}
    }
  }

  button.secondary {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    background: #EE4D64;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    text-transform: uppercase;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#EE4D64')}
    }
  }
`;
