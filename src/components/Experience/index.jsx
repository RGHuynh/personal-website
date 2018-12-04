import React from 'react';
import ReactJsIcon from '../../images/reactjs.svg';
import './index.css';

export default function Experience() {
    return(
        <section>
            
            <div className="exp-wrap">
                <img className="exp-icon" src={ReactJsIcon}></img>
                <h1 className="exp-title">Reactjs</h1>
            </div>
            
            <div>NodeJS</div>
            <div>PostgreSQL</div>
        </section>
    );
}