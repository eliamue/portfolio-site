import './styles/App.css';
import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div>
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
            path="/projectlist">
              <ProjectList />
          </Route>
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
