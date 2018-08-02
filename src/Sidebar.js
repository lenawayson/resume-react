import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import logo from './logo.svg';
import './App.css';

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
    path: "/shoelaces",
    main: () => <h2>Shoelaces</h2>
  }
];

class Sidebar extends Component {
    render(){
        return(
            <Router>
            <div style={{display: "flex"}}>
            <div class="sidebar">
           
            <ul class="nav-ul">
                <li><Link to="/"> <img class="img-circle"></img></Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Shoelaces</Link></li>
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