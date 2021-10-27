import React, { Component } from 'react';
import Carousel from './Carousel';
import '../styles/projectlist.css';
import vibn from '../assets/vibn.png';
import safesrc from '../assets/safesrc.png';
import torr from '../assets/torr.png';
import triforce from '../assets/triforce.png';
import VibnDescription from '../components/descriptions/VibnDescription';
import TriforceDescription from './descriptions/TriforceDescription';
import SafesrcDescription from './descriptions/SafesrcDescription';
import TorrDescription from '../components/descriptions/TorrDescription';

export default class ProjectList extends Component {
  state = {
    srcseen: false,
    torrseen: false,
    trifseen: false,
    vibnseen: false,
  };

  toggleVibn = () => {
    this.setState({
      vibnseen: !this.state.vibnseen,
    });
  };
  toggleSafe = () => {
    this.setState({
      srcseen: !this.state.srcseen,
    });
  };

  toggleTrif = () => {
    this.setState({
      trifseen: !this.state.trifseen,
    });
  };
  
  toggleTorr = () => {
    this.setState({
      torrseen: !this.state.torrseen,
    });
  };

  render() {
    return (
      <div className="ProjectList">
        <Carousel>
          <section className="vibn-container" onClick={this.toggleVibn}>
            <img className="vibn-logo" src={vibn} alt="vibn logo" />
            {this.state.vibnseen ? (
              <VibnDescription toggle={this.toggleVibn} />
            ) : null}
          </section>

          <section className="safesrc-container" onClick={this.toggleSafe}>
            <img className="safesrc-logo" src={safesrc} alt="safeSRC logo" />
            {this.state.srcseen ? (
              <SafesrcDescription toggle={this.toggleSafe} />
            ) : null}
          </section>

          <section className="triforce-container" onClick={this.toggleTrif}>
            <img className="triforce-logo" src={triforce} alt="triforce logo" />
            {this.state.trifseen ? (
              <TriforceDescription toggle={this.toggleTrif} />
            ) : null}
          </section>

          <section className="torr-container" onClick={this.toggleTorr}>
            <img className="torr-logo" src={torr} alt="torr logo" />
            {this.state.torrseen ? (
              <TorrDescription toggle={this.toggleTorr} />
            ) : null}
          </section>
        </Carousel>
      </div>
    );
  }
}