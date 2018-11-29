import React, { Component } from 'react';
import HamburgerStack from '../icons/hamburgerStack'
import './index.css';

class Navigation extends Component{
  render(){
    return(
      <nav className="navbar navbar__color navbar--size">
        <div className="hamburgerStack">
          <HamburgerStack />
        </div>
      </nav>
    );
  }
}

export default Navigation;
