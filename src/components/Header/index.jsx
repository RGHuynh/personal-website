import React from 'react';
import Navigation from '../Navigation';
import ProfilePic from '../../images/profile.jpeg'
import './index.css';

export default function Header() {
    return(
        <header >
            <Navigation />
            <img className="icon" src={ProfilePic}></img>
            <div className="header-description">
                <h1 className="header-description-name">Randall Huynh</h1>
                <h2 className="header-description-title">Full Stack Developer</h2>
            </div>

        </header>
    )
}