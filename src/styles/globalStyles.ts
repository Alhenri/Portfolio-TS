import { createGlobalStyle } from 'styled-components';
import { backgroundAnimation } from './animations';

export default createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    overflow: hidden;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    color: aliceblue;

    background: linear-gradient(
      45deg,
      rgba(14, 11, 22, 1) 21%,
      rgba(162, 57, 202, 1) 53%,
      rgba(71, 23, 246, 1) 100%
    );
    background-size: 200% 200%;
    animation: ${backgroundAnimation} 15s ease infinite;
  }
  #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
  .App{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
  body {
    overflow: hidden auto;
  }
  #root {
    min-height: 700px;
  }

  ::-webkit-scrollbar {
    width: 2px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #9b9b9b; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9b9b9b; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #e3e3e3; /* creates padding around scroll thumb */
  }
`;
