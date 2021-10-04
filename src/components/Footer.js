import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/GlobalStyles';
import { lightTheme, darkTheme } from './themes/Theme';

const Footer = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
            return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
              <nav className="nav-bar">
                <span className="cont">
                  <Link className="nav-link" to={'/contact'}>
                    Contact
                  </Link>
                </span>

                <span className="abt">
                  <Link className="nav-link" to={'/about'}>
                    About
                  </Link>
                </span>

                <span className="prj">
                  <Link className="nav-link" to={'/projects'}>
                    Projects
                  </Link>
                </span>
                <button onClick={themeToggler}>Toggle Dark/Light Mode</button>
                <span className="hme">
                  <Link className="nav-link" to={'/'}>
                    Home
                  </Link>
                </span>
              </nav>
              </>
              </ThemeProvider>
            );
      }

      export default Footer;
