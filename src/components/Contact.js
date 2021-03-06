import React, { Component } from 'react';
import '../styles/Contact.css';
import Mailto from './MailTo';

export default class Contact extends Component {
  render() {
    return (
      <div className="contacts">
        <section className="cont-container">
          <header>
            <h1 className="cont-title">Contact Me</h1>
          </header>
        </section>

        <section className="cont-links">
          <h2>Under Construction</h2>
          <a
            className="li-link"
            href="https://www.linkedin.com/in/eliamue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="gh-link"
            href="https://www.github.com/eliamue"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <div className="e-link">
            <Mailto label="E-Mail" mailto="mailto:eliamue@live.com" />
          </div>
        </section>
      </div>
    );
  }
}
