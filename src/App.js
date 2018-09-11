import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#f9f9f9"}}>
      <Sidebar />
      </div>
    );
  }
}

export default App;
