import React, { Component } from 'react';
import HamburgerStack from './Hamburger';
import './index.css';

class Navigation extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeButton: ''
    };
  }

  onClick() {
    this.setState({
      activeButton: 'is-active'
    });
  }


  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark navbar__color navbar--size">
        <HamburgerStack activeButton={this.state.activeButton}/>
      </nav>
    );
  }
}

export default Navigation;
