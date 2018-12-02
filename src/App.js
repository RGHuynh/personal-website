import React, { Component } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Experience />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
  }
}

export default App;
