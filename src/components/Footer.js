import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/GlobalStyles';
import { lightTheme, darkTheme } from './themes/Theme';
import icon from '../assets/icon.png';
import dark from '../assets/dark.png';

const Footer = () => {
    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
            return (
              <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                  <GlobalStyles />
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

                    <span className="hme">
                      <Link className="nav-link" to={'/'}>
                        <img
                          className="home-icon"
                          src={icon}
                          alt="home icon"
                          height="50px"
                          width="50px"
                        />
                      </Link>
                    </span>

                    <span className="prj">
                      <Link className="nav-link" to={'/projects'}>
                        Projects
                      </Link>
                    </span>

                    <button onClick={themeToggler} className="theme-btn">
                      <img className="toggle-image" src={dark} alt="toggle theme" />
                    </button>
                  </nav>
                </>
              </ThemeProvider>
            );
      }

      export default Footer;
