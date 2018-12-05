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
    ScrollReveal().reveal('.experience-container', {delay: 500})
    ScrollReveal().reveal('.project-container', {delay: 1000})
    ScrollReveal().reveal('.contact-container', {delay: 1500})
    ScrollReveal().reveal('.footer-container', {delay: 2000})
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
