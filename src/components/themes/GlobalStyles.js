import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
      fontFamily: 'OpenDyslexic-Regular', 'Alice';
      transition: all 0.50s linear;
      backgroundImage: url('../../styles/rose.png');
  }
  `;