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
      <div >
        <HamburgerStack activeButton={this.state.activeButton}/>
        <nav className="navbar navbar-expand-lg navbar--size">
          <ul className="nav-list-container">
            <li className="nav-list-item">Experiences</li>
            <li className="nav-list-item">Projects</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
