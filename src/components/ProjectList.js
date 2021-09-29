import React, { Component } from 'react'

export default class ProjectList extends Component {
      render() {
            return (
              <div>
                <section className="project-list">
                  <h2>Projects</h2>
                  <p className="safesrc">safeSRC</p>
                  <p className="torr">
                    Tales of Torr: The Quest to Defeat the Everlasting Dragon
                  </p>
                  <p className="triforce">Triforce Trivia</p>
                  {/* <section className="kpop">
                  Kpop Database
                </section> */}
                  {/* <section className="john-oliver">
                  John Oliver Flirtation with Adam Driver Generator
                </section> */}
                </section>
              </div>
            );
      }
}
