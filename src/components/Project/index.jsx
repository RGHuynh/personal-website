import React from 'react';
import BackgroundImage2 from '../../images/background2.svg';
import './index.css';

export default function Project() {
    return(
        <section className="project-container" style={{backgroundImage: `url(${BackgroundImage2})`}}>
            <h1 className="project-title__color title">PROJECTS</h1>
            <div>image</div>
            <h2>Random Restaurant</h2>
            <p>some stuff</p>
            <a>button</a>
        </section>
    );
}