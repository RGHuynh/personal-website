import React from 'react';
import './index.css';

export default function Project({title, image, subTitle, body, backgroundStyle}) {
    return(
        <div className="project-container" style={ backgroundStyle }>
            <h1 className="portfolio-title__color title">{title}</h1>
            <img src={ image } />
            <h2>{ subTitle }</h2>
            <p>{ body }</p>
            <a>button</a>
        </div>
    );
}