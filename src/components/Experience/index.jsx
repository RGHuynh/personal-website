import React from 'react';
import ReactJsIcon from '../../images/reactjs.svg';
import NodeJsIcon from '../../images/nodejs.svg';
import Postgresql from '../../images/postgresql.svg'
import ContentSection from './ContentSection'
import './index.css';

export default function Experience() {
    return(
        <section>
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
        </section>
    );
}