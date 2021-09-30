import React, { Component } from 'react';
import '../styles/Projects.css';
import safesrc from '../styles/safesrc.png';
import torr from '../styles/torr.png';
import triforce from '../styles/triforce.png';
import SafesrcDescription from './descriptions/SafesrcDescription';
import TorrDescription from './descriptions/TorrDescription';
import TriforceDescription from './descriptions/TriforceDescription';

export default class Projects extends Component {
  state = {
    srcseen: false,
    torrseen: false,
    trifseen: false
  };

  toggleSafe = () => {
    this.setState({
      srcseen: !this.state.srcseen,
    });
  };

  toggleTorr = () => {
    this.setState({
      torrseen: !this.state.torrseen,
    });
  };

  toggleTrif = () => {
    this.setState({
      trifseen: !this.state.trifseen,
    });
  };

  render() {
    return (
      <div className="projects">
        <section className="proj-container">
          <header>
            <h1 className="proj-title">Projects</h1>
          </header>
        </section>

        <section className="project-list">
          <section className="safesrc">
            <button className="project-name" onClick={this.toggleSafe}>
            <img className="safesrc-logo" src={safesrc} alt="safeSRC logo" />
              <h3>safeSRC</h3>
              {this.state.srcseen ? (
                <SafesrcDescription toggle={this.toggleSafe} />
              ) : null}
            </button>
          </section>

          <section className="torr">
            <button className="project-name" onClick={this.toggleTorr}>
            <img className="torr-logo" src={torr} alt="torr logo" />
              <h3>Tales of Torr:</h3> <h4>The Quest to Defeat the Everlasting Dragon</h4>
              {this.state.torrseen ? (
                <TorrDescription toggle={this.toggleTorr} />
              ) : null}
            </button>
          </section>

          <section className="triforce">
            <button className="project-name" onClick={this.toggleTrif}>
            <img className="triforce-logo" src={triforce} alt="triforce logo" />
              <h3>Triforce Trivia</h3>
              {this.state.trifseen ? (
                <TriforceDescription toggle={this.toggleTrif} />
              ) : null}
            </button>
          </section>
        </section>
      </div>
    );
  }
}
