import React from 'react';
import GithubImg from '../../images/github.svg';
import './index.css';

export default function Footer() {
    return(
        <footer className="footer-container">
            <img className="footer-img" src={GithubImg}></img>
            <a href="http://github.com">Github</a>
        </footer>
    );
}