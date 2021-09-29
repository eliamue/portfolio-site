import React, { Component } from 'react';
import '../styles/Footer.css';

export default class Footer extends Component {
      render() {
            return (
              <div>
                <section className="footer">
                  <p className="head-links">
                    <p className="cont">
                    <a href="/contact" className="link" alt="contact">
                      Contact Me
                    </a>
                  </p>
                  <p className="abt">
                    <a href="/about" className="link" alt="about">
                      About Me
                    </a>
                  </p>
                  <p className="prj">
                    <a href="/projects" className="link" alt="projects">
                      Projects
                    </a>
                  </p>
                  <p className="home">
                    <a href="/" className="link" alt="home">
                      Home
                    </a>
                  </p>
                  </p>
                </section>
              </div>
            );
      }
}
