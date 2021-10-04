import React, { Component } from 'react';
import '../../styles/Descriptions.css';

export default class TorrDescription extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <section className="pop">
            <p className="proj-description">
              Tales of Torr: The Quest to Defeat the Everlasting Dragon is a
              retro RPG inspired game where the user takes on the role of one of
              three heroes capable of searching for and defeating the
              everlasting dragon plaguing the town. Fight monsters in the
              wilderness, improve your strengths with mystical potions, visit a
              strange laboratory; all this and more in Tales of Torr. Created by
              a remote team of five during a five day sprint using Javascript.
            </p>

            <section className="project-sites">
              <a
                className="plink"
                href="https://missaelortiz.github.io/The-Tales-of-pThe-Quest-to-Defeat-the-Everlasting-Dragon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Site
              </a>
              <a
                className="plink"
                href="https://github.com/MissaelOrtiz/The-Tales-of-Torr-The-Quest-to-Defeat-the-Everlasting-Dragon"
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
