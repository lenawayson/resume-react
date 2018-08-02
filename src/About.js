import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class About extends Component {

    render(){
        return (
            <div class="content">
            <div class="home">
            <h1>Hi, I'm Lena.</h1>
            <div style={{width: "80%"}}> <p>** styling for p tage** <br />
            I'm a student at the <b>University of Georgia</b> studying <b>Computer Science.</b>
            I've always loved solving problems, optimizing solutions, and thinking outside of the box. 
            I love both <b>software engineering</b> and <b>web design + development</b>. 
            </p></div>
            </div>
            </div>
        )
    }
}
export default About;