import React, { Component } from 'react';
import '../../styles/Descriptions.css';

export default class TriforceDescription extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <section className="pop">
            <p className="proj-description">
              Scooby Doo-themed trivia adventure game that dynamically changes
              based on the success or failure of the user.
            </p>
            <section className="project-sites">
              <a
                className="plink"
                href="https://triforce-trivia.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Site
              </a>
              <a
                className="plink"
                href="https://github.com/orgs/Triforce-Trivia/repositories"
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
