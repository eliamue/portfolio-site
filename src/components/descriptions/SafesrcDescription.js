import React, { Component } from 'react';
import '../../styles/Descriptions.css';

export default class SafesrcDescription extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <section className="pop">
            <p className="proj-description">
              Community safety app that provides resources for 24/7 emergency
              services as a safer alternative to calling the police. Based on
              location, emergencies are filtered into selectable categories
              using a simple, clean UI to make navigation as accessible as
              possible when time is of the essence.
            </p>
            <section className="project-sites">
              <a
                className="plink"
                href="https://safesrc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Site
              </a>
              <a
                className="plink"
                href="https://github.com/orgs/safeSRC/repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
