import React, { Component } from 'react';
import posed from 'react-pose'
import Navigation from '../Navigate';
import ProfilePic from '../../images/profile.jpeg';
import Background1 from '../../images/background1.svg';
import './index.css';

const Box = posed.img({
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: 2000,
            ease: 'linear'
        }
    }
});

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            inVisible: false
        }
    }

    componentDidMount() {
        this.setState({ isVisible: true})
    }

    render() {
        const isVisible = this.state.isVisible
        return(
            <header className="mastHead" ref="header1" style={{backgroundImage: `url(${Background1})`}}>
                <Navigation />
                <div className="container">
                    <div className="portfolio">
                        <Box className="icon" src={ProfilePic} pose={isVisible ? 'visible' : 'hidden'} />
                        <img ></img>
                            <div className="header-description">
                                <h1 className="header-description-name">Randall Huynh</h1>
                                <h2 className="header-description-title">Full Stack Developer</h2>
                            </div>
                    </div>
                </div>
            </header>
        )
    }
}