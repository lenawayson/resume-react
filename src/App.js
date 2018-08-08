import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div>
      <Sidebar />
      </div>
    );
  }
}

export default App;
