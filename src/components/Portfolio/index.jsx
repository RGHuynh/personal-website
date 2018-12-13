import React from 'react';
import Project from './Project';
import ScrollableAnchor from 'react-scrollable-anchor';
import BackgroundImage2 from '../../images/background2.svg';
import TrustRootImage from '../../images/trustroots.svg';
import RandomRestaurant from '../../images/randomRestaurant.svg';
import './index.css';

export default function Portfolio() {
    return(
        <ScrollableAnchor id={'portfolio'}>
            <section className="portfolio-container" >
                <Project
                    title="PROJECT" 
                    backgroundStyle={{backgroundImage: `url(${BackgroundImage2})`}}
                    subTitle="Random Restaurant"
                    image={RandomRestaurant}
                    body="This web app helps people who doesn't know where to eat to find a place. It's great to use when you're in a big group and needs a place to eat"
                    urlLink="https://random-restaurant46.herokuapp.com/"
                />
                <Project 
                    titleColor={{color: "black"}}
                    title="OPEN SOURCE PROJECT"
                    subTitle="TrustRoot"
                    image={TrustRootImage}
                    body="Have a look! Travel anywhere and easily find great people who want to meet you as well. See where other travellers are and help each other out, whether through welcoming them to your home, sharing your stories or becoming friends."
                    urlLink="https://www.trustroots.org/"
                />
            </section>
        </ScrollableAnchor>
    );
}