import React, { Component } from 'react';
import './index.css';

class Navigation extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark navbar__color navbar--size">
        <div>
          <div className="hamburgerStack">
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
