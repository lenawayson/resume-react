import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Home extends Component {

    render(){
        return (
            <div class="content">
                <div class="home">
                <h1>Lena   <div style={{color:"#4DB1B8", display:"inline"}}>Wayson</div> </h1> 
                <h2> student. developer. designer. </h2>
                </div>
            </div>
        )
    }
}
export default Home;