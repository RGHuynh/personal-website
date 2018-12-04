import React from 'react';
import './index.css';

export default function ContentSection({icon, title}) {
    return(
        <div className="exp-wrap">
            <img className="exp-icon" src={icon}></img>
            <h1 className="exp-title">{title}</h1>
        </div>
    )
}