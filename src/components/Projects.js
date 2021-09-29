import React, { Component } from 'react';
import '../styles/Projects.css';

import ProjectList from './ProjectList';


export default class Projects extends Component {
      render() {
            return (
              <div>
                <header>
                  <h1 className="proj-title">Projects</h1>
                </header>
                <section className="projects-container">
                <ProjectList />
                </section>
              </div>
            );
      }
}
