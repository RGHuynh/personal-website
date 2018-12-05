import React, { Component } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';
import './App.css';

class App extends Component {

  componentDidMount() {
    ScrollReveal().reveal('.mastHead')
  }
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
