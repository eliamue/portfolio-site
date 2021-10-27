import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <h1 className="vibn-name">Vibn</h1>
            <p className="proj-description">
              Vibn is a mobile-first, social media platform that connects
              authorized Spotify users based on their music tastes, where users
              can browse each others' top artists and Spotify profiles and
              message each other. The vaporwave-themed Vibn was developed by a
              remote team of 3 during a two-week sprint using React, Express,
              postgreSQL, Node.js, CSS, HTML, and Spotify Auth. Vibn will
              continue to be developed and fleshed-out with the goal of
              publishing and getting full authorization from Spotify.
            </p>
            <p className="disclaimer">
              *Due to Spotify's development program limitations, Vibn is curently inaccessible to users who are not manually added to a capped list of 25 users via their Spotify account email. A demo version is under construction to provide a preview of the app, and will be available soon. <Link to="/contact" style={{ fontSize: '13px', color: 'white' }}>Contact me</Link> to be added to the list of authorized users and try out the full app yourself!
            </p>

            <section className="project-sites">
              <a
                href="https://vibn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="website-logo" src={website} alt="website" />
              </a>
              <a
                href="https://github.com/Vibn-App"
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
