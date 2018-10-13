import React from 'react';

function sidebarList(blockName, hyperlink, title){
  return(
    <li className={blockName}>
      <a className="js-scroll-trigger" href={hyperlink}>{title}</a>
    </li>
    );
}

export default sidebarList;