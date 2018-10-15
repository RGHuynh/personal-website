import React from 'react';
import SidebarList from './sidebarList/sidebarList'
import './sidebarNav.css'
function sidebarNav(){
  return(
    <ul className="sidebar-nav">
      <SidebarList blockName="sidebar-brand" title="Home"/>
      <SidebarList blockName="sidebar-nav-item" title="About"/>
      <SidebarList blockName="sidebar-nav-item" title="Services"/>
      <SidebarList blockName="sidebar-nav-item" title="Portfolio"/>
    </ul>
    );
}

export default sidebarNav;