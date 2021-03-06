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

    background: linear-gradient(71deg, rgba(41,2,125,1) 0%, rgba(132,16,158,1) 56%, rgba(31,26,26,1) 100%);
    background-size: 200% 200%;
    animation: ${backgroundAnimation} 10s ease infinite;
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
    max-height: 100vh;
    max-width: 100vw;
  }
  #root {
    min-height: 760px;
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
