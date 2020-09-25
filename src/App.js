import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap';

import { Slide,Fade,Zoom } from "react-awesome-reveal";
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

//my app
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Amit Malkan',
      headLinks: [
        {title: 'Home', path: '/' },
        {title: 'About', path: '/about' },
        {title: 'Projects', path: '/projects' },
        {title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Open for work!',
        subTitle: 'Success is achieved by ordinary people with extraordinary determintaion',
      },
      about: {
        title: 'About me'
      },
      projects: {
        title: 'Here are some of my works'
      },
      contact: {
        title: 'Let\'s stay on touch!'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Zoom>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Amit Malkan</Navbar.Brand>
              
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/MyWebsite/">Home</Link>
                  <Link className="nav-link" to="/MyWebsite/about">About</Link>
                  <Link className="nav-link" to="/MyWebsite/projects">Projects</Link>
                  <Link className="nav-link" to="/MyWebsite/contact">Contact</Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Zoom>
          <Route path="/MyWebsite/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
          <Route path="/MyWebsite/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/MyWebsite/projects" exact render={() => <ProjectsPage title={this.state.projects.title} />} />
          <Route path="/MyWebsite/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
