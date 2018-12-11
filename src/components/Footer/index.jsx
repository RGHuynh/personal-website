import React from 'react';
import GithubImg from '../../images/github.svg';
import LinkedinImg from '../../images/linkedin.svg';
import './index.css';

export default function Footer() {
    return(
        <footer className="footer-container">
            <a className="footer-img-container" href="https://github.com/RGHuynh">
                <img className="footer-img" src={GithubImg}></img>
            </a>
            <a className="footer-img-container" href="https://www.linkedin.com/in/randallhuynh/">
                <img className="footer-img" src={LinkedinImg}></img>
            </a>
        </footer>
    );
}