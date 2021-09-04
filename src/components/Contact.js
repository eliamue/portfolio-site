import React, { Component } from 'react';
import '../styles/Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contacts">
        poopy
        <h3>Contact Me</h3>
        <p className="linkedin">
          asdfaxc
          <a
            className="li-link"
            href="https://www.linkedin.com/in/eliamue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          sdfg
        </p>
        dfsbvdfxt
          <p className="github">
            <a
              className="gh-link"
              href="https://www.github.com/eliamue"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
      </div>
    );
  }
}
