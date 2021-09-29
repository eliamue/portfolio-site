import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default class Footer extends Component {
      render() {
            return (
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

                    <span className="hme">
                      <Link className="nav-link" to={'/'}>
                        Home
                      </Link>
                    </span>
              </nav>
            );
      }
}
