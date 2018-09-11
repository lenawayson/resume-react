import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Education from './Education.js';
import Experience from './Experience.js'
import Leadership from './Leadership.js'
import Photo from '../images/me.JPG'
import Resume from '../images/Resume-Sept-2018.pdf'
import '../App.css';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/about",
    main: () => <About />
  },
  {
    path: "/education",
    main: () => <Education />
  },
  {
    path: "/experience",
    main: () => <Experience />
  },
  {
    path: "/leadership",
    main: () => <Leadership />
  }
];

class Sidebar extends Component {
    render(){
        return(
            <Router>
            <div style={{display: "flex", flexDirection: "column"}}>
            <div class="sidebar">
                <ul class="nav-ul">
                    <Link to="/"> <img class="img-circle" src={Photo}></img></Link>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to={Resume} target="_blank">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
            </Router>
        );
    }
}

export default Sidebar;