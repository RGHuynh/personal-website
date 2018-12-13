import React from 'react';
import './index.css';

export default function Project({title, image, subTitle, body, backgroundStyle, titleColor, urlLink}) {
    return(
        <div className="project-container" style={ backgroundStyle }>
            <h1 className="portfolio-subTitle portfolio-title__color title" style={titleColor} >{title}</h1>
            <img className="project-image" src={ image } />
            <h2 className="portfolio-subTitle" style={ titleColor } >{ subTitle }</h2>
            <p className="project-body" style={titleColor} >{ body }</p>
            <a href={ urlLink } className="btn btn__position btn__size btn__color">
                View
            </a>
        </div>
    );
}