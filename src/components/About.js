import React, { Component } from 'react';
import '../styles/About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="about-container">
          <header>
            <h1 className="about-title">About Me</h1>
          </header>
        </section>

        <section className="about-desc">
          <p>I'm a human person</p>
          <p>Wow</p>
        </section>
      </div>
    );
  }
}
