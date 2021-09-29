import React, { Component } from 'react';
import '../styles/Projects.css';
import safesrc from '../styles/safesrc.png';

export default class Projects extends Component {
      render() {
            return (
              <div>
                <header>
                  <h1 className="proj-title">Projects</h1>
                </header>

                <section className="projects-container">
                  <section className="safesrc">
                    <img className="safesrc-logo" src={safesrc} alt="safeSRC logo" />
                    <h1>
                      <a
                        className="safesrc-link"
                        href="https://safesrc.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        safeSRC
                      </a>
                    </h1>
                    <p>Description</p>
                  </section>

                  <section className="torr">
                    <h1>
                      <a
                        className="torr-link"
                        href="https://missaelortiz.github.io/The-Tales-of-Torr-The-Quest-to-Defeat-the-Everlasting-Dragon/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tales of Torr: The Quest to Defeat the Everlasting
                        Dragon
                      </a>
                    </h1>
                    <p>Description</p>
                  </section>

                  <section className="triforce">
                    <h1>
                      <a
                        className="triforce-link"
                        href="https://triforce-trivia.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Triforce Trivia
                      </a>
                    </h1>
                    <p>Description</p>
                  </section>

                </section>
              </div>
            );
      }
}
