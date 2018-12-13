import React from 'react';
import ReactJsIcon from '../../images/reactjs.svg';
import NodeJsIcon from '../../images/nodejs.svg';
import Postgresql from '../../images/postgresql.svg';
import ContentSection from './ContentSection';
import ScrollableAnchor from 'react-scrollable-anchor';
import './index.css';

export default function Experience() {
    return(
        <ScrollableAnchor id={"experience"}>
            <section className="experience-container">
                <div className="container">
                    <h1 className="experience--position title" >EXPERIENCE</h1>
                        <ContentSection 
                            icon={ReactJsIcon}
                            title="ReactJS"
                        />

                        <ContentSection 
                            icon={NodeJsIcon}
                            title="NodeJS"
                        />
                        
                        <ContentSection
                            icon={Postgresql}
                            title="PostgreSQL"
                        />
                </div>
            </section>
        </ScrollableAnchor>
    );
}