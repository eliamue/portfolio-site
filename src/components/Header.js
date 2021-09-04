import React, { Component } from 'react';

export default class Header extends Component {
      render() {
            return (
              <div>
                <header>
                  <p className="head-links">
                    <a href="/contact" className="link" alt="contact">
                      Contact Me
                    </a>
                  </p>
                  <p className="head-links">
                    <a href="/about" className="link" alt="about">
                      About Me
                    </a>
                  </p>
                  <p className="head-links">
                    <a href="/projects" className="link" alt="projects">
                      Projects
                    </a>
                  </p>
                  <p className="head-links">
                    <a href="/" className="link" alt="home">
                      Home
                    </a>
                  </p>
                </header>
              </div>
            );
      }
}
