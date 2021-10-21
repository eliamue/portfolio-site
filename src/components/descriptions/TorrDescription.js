import React, { Component } from 'react';
import '../../styles/Descriptions.css';
import github from '../../assets/github.png';
import website from '../../assets/website.png';

export default class TorrDescription extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <section className="pop">
            <h1 className="torr-name">
              Tales of Torr: The Quest to Defeat the Everlasting Dragon
            </h1>
            <p className="proj-description">
              Tales of Torr: The Quest to Defeat the Everlasting Dragon is a
              retro RPG inspired game where the user takes on the role of one of
              three heroes capable of searching for and defeating the
              everlasting dragon plaguing the town. Fight monsters in the
              wilderness, improve your strengths with mystical potions, visit a
              strange laboratory; all this and more in Tales of Torr. Created by
              a remote team of five during a five day sprint using Javascript,
              HTML, and CSS.
            </p>

            <section className="project-sites">
              <a
                href="https://missaelortiz.github.io/The-Tales-of-pThe-Quest-to-Defeat-the-Everlasting-Dragon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="website-logo" src={website} alt="website" />
              </a>
              <a
                href="https://github.com/MissaelOrtiz/The-Tales-of-Torr-The-Quest-to-Defeat-the-Everlasting-Dragon"
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
