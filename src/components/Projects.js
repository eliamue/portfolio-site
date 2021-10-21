import React, { Component } from 'react';
import '../styles/Projects.css';
import vibn from '../assets/vibn.png';
import safesrc from '../assets/safesrc.png';
import torr from '../assets/torr.png';
import triforce from '../assets/triforce.png';
import VibnDescription from './descriptions/VibnDescription';
import SafesrcDescription from './descriptions/SafesrcDescription';
import TorrDescription from './descriptions/TorrDescription';
import TriforceDescription from './descriptions/TriforceDescription';

export default class Projects extends Component {
  state = {
    srcseen: false,
    torrseen: false,
    trifseen: false,
    vibnseen: false,
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

  toggleVibn = () => {
    this.setState({
      vibnseen: !this.state.vibnseen,
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

            <button className="vibn-container" onClick={this.toggleVibn}>
              <img className="vibn-logo" src={vibn} alt="vibn logo" />
              {this.state.vibnseen ? (
                <VibnDescription toggle={this.toggleVibn} />
              ) : null}
            </button>

            <button className="safesrc-container" onClick={this.toggleSafe}>
              <img className="safesrc-logo" src={safesrc} alt="safeSRC logo" />
              {this.state.srcseen ? (
                <SafesrcDescription toggle={this.toggleSafe} />
              ) : null}
            </button>

            <button className="triforce-container" onClick={this.toggleTrif}>
              <img
                className="triforce-logo"
                src={triforce}
                alt="triforce logo"
              />
              {this.state.trifseen ? (
                <TriforceDescription toggle={this.toggleTrif} />
              ) : null}
            </button>


            <button className="torr-container" onClick={this.toggleTorr}>
              <img className="torr-logo" src={torr} alt="torr logo" />
              {this.state.torrseen ? (
                <TorrDescription toggle={this.toggleTorr} />
              ) : null}
            </button>

        </section>
      </div>
    );
  }
}
