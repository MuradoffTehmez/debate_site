// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f7f9fc;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #0073e6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  p {
    line-height: 1.6;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #0073e6;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #005bb5;
  }
`;

export default GlobalStyles;
