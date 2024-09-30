import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f8; /* Light background color */
    color: #333;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Make sure App covers the whole view height */
  }

  header {
    flex-shrink: 0; /* Keep the header size */
  }

  main {
    flex-grow: 1; /* Ensure main content grows to take up available space */
  }

  footer {
    flex-shrink: 0; /* Footer stays at the bottom */
    padding: 1rem;
    background-color: #333;
    color: white;
    text-align: center;
  }
`;

export default GlobalStyles;
