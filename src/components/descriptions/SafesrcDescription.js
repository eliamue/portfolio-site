import React, { Component } from 'react';
import '../../styles/Descriptions.css';
import github from '../../assets/github.png';
import website from '../../assets/website.png';

export default class SafesrcDescription extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <section className="pop">
            <h1 className="safesrc-name">safeSRC</h1>
            <p className="proj-description">
              safeSRC is a community safety app that provides resources for 24/7
              emergency services as a safer alternative to calling the police.
              Based on location, emergencies are filtered into selectable
              categories using a simple, clean UI to make navigation as
              accessible as possible when time is of the essence. Created by a
              remote team of 5 during a two-week sprint using React, Express,
              postgreSQL, Node.js, CSS, HTML, and Spotify Auth.
            </p>
            <section className="project-sites">
              <a
                href="https://safesrc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="website-logo" src={website} alt="website" />
              </a>
              <a
                href="https://github.com/orgs/safeSRC/repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github-logo" src={github} alt="github" />
              </a>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
