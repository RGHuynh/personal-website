import React, { Component } from 'react';
import SidebarNav from './sidebarNav/sidebarNav';
import MenuToggle from './menuToggle/menuToggle';
import './navigation.css';

class Navigation extends Component{
  render(){
    return(
      <div>
        <MenuToggle />
        <nav id='sidebar--wrapper'>
          <SidebarNav />
        </nav>
      </div>
    );
  }
}

export default Navigation;
