import './styles/App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import SinglePagePDFViewer from './components/single-page.js';
import Resume from './components/Resume.pdf';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            exact
            path="/projects"
            render={(routerProps) => <Projects {...routerProps} />}
          />
          <Route
            exact
            path="/about"
            render={(routerProps) => <About {...routerProps} />}
          />
          <Route
            exact
            path="/contact"
            render={(routerProps) => <Contact {...routerProps} />}
          />
        </Switch>
      </Router>
      <SinglePagePDFViewer pdf={Resume} />
      <Footer />
    </div>
  );
}
}