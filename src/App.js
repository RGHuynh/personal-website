import React, { Component } from 'react';
import './App.css';
import Homepage from './components/pages/homePage/homepage';

class App extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
