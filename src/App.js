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
import background from './assets/Background1.jpg';


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
        subTitle: 'Success is achieved by ordinary people with extraordinary determintaion'
      },
      about: {
        title: 'About me'
      },
      projects: {
        title: 'My works'
      },
      contact: {
        title: 'Let\'s stay in touch!',
        subTitle: 'Leave your details here and I\'ll contact you'
      }
    }
  }
  render() {
    return (
      <div
        class="bg_image"
        style={{
          background: "black",
          backgroundImage: 'url('+background+')',
          backgroundSize: "cover",
          height: "100%",
          color: "#f5f5f5"
        }}
      >
        <Router>
          <Container className="p-0" fluid={true}>
            <Zoom>
              <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand><img src={require('../src/assets/facebook_cover_photo_1.png')} width="200" height="52.4"></img></Navbar.Brand>
                
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/MyWebsite/" style={{color : "white", fontWeight: 700}}>Home</Link>
                    <Link className="nav-link" to="/MyWebsite/about" style={{color : "white", fontWeight: 700}}>About</Link>
                    <Link className="nav-link" to="/MyWebsite/projects" style={{color : "white", fontWeight: 700}}>Projects</Link>
                    <Link className="nav-link" to="/MyWebsite/contact" style={{color : "white", fontWeight: 700}}>Contact</Link>
                    
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Zoom>
            <Route path="/MyWebsite/" exact render={() => <Fade><HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} /></Fade>} />
            <Route path="/MyWebsite/about" exact render={() => <Fade><AboutPage title={this.state.about.title} /></Fade>} />
            <Route path="/MyWebsite/projects" exact render={() => <Fade><ProjectsPage title={this.state.projects.title} /></Fade>} />
            <Route path="/MyWebsite/contact" exact render={() => <Fade><ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} /></Fade>} />

            <Footer/>

          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
