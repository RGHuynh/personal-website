import React, { Component } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Project from './components/Project';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Experience />
            <Project />
        </div>
    );
  }
}

export default App;
