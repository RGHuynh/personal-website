import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  componentDidMount() {
    ScrollReveal().reveal('.mastHead');
    ScrollReveal().reveal('.experience-container', { delay: 500 });
    ScrollReveal().reveal('.portfolio-container', { delay: 1000 });
    ScrollReveal().reveal('.contact-container', { delay: 1500 });
    ScrollReveal().reveal('.footer-container', { delay: 2000 });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
