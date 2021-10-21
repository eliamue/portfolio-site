import React, { Component } from 'react';
import '../../styles/Descriptions.css';
import github from '../../assets/github.png';
import website from '../../assets/website.png';

export default class TriforceDescription extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <section className="pop">
            <h1 className="triforce-name">Triforce Trivia</h1>
            <p className="proj-description">
              Scooby Doo-themed trivia adventure game that dynamically changes
              based on the success or failure of the user. Created by a remote
              team of 3 during a 5-day sprint using React, Express, postgreSQL,
              Node.js, CSS, and HTML.
            </p>
            <section className="project-sites">
              <a
                href="https://triforce-trivia.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="website-logo" src={website} alt="website" />
              </a>
              <a
                href="https://github.com/orgs/Triforce-Trivia/repositories"
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
