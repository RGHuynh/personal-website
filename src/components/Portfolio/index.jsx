import React from 'react';
import Project from './Project'
import BackgroundImage2 from '../../images/background2.svg';
import './index.css';

export default function Portfolio() {
    return(
        <section className="portfolio-container" >
            <Project
                title="PROJECT" 
                backgroundStyle={{backgroundImage: `url(${BackgroundImage2})`}}
                subTitle="Random Restaurant"
                body="it is"
            />
            <Project 
                subTitle="TrustRoot"
                body="it is"
            />

        </section>
    );
}