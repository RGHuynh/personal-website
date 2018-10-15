import React, {Component} from 'react';
import './menuToggle.css';

export default class MenuToggle extends Component{
  constructor(props){
    super(props);
    this._handleMenuToggle = this._handleMenuToggle.bind(this);
  }

  ////////
  _handleMenuToggle(){
    let sideBarWrapperRef = document.getElementById('sidebar--wrapper')
    sideBarWrapperRef.classList.toggle('active');
  }

  

  render(){
    return(
      <a className="menu-toggle rounded" href="#" onClick={this._handleMenuToggle}>
        <i className="fas fa-bars"></i>
      </a>
    );
  } 
}
