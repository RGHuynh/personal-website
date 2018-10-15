import React from 'react';
import './sidebarList.css';

function sidebarList({blockName, hyperlink, title}){
  return(
    <li className={blockName}>
      <a className="js-scroll-trigger" href={hyperlink}>{title}</a>
    </li>
    );
}

export default sidebarList;