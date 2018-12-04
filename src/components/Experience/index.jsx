import React from 'react';
import ReactJsIcon from '../../images/reactjs.svg';

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

                />

            <div>NodeJS</div>
            <div>PostgreSQL</div>
        </section>
    );
}