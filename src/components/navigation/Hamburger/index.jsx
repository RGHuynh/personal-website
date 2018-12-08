import React, {Component} from 'react';
import './index.css';
import posed from 'react-pose';

const Sidebar = posed.nav({
    open: { x: '0%', staggerChildren: 100 },
    closed: { x: '-100%' }
})

const NavItem = posed.li({
    open: { opacity: 1 },
    closed: { opacity: 0 }
  })

export default class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            buttonStatus: ''
        }
        this.changeClicked = this.changeClicked.bind(this);
    }

    changeClicked() {
        if(this.state.clicked) {
            this.setState({
                buttonStatus: '',
                clicked: !this.state.clicked
            })
        }
        else {
            this.setState({
                buttonStatus: 'is-active',
                clicked: !this.state.clicked
            })
        }
    }

    render(){
        return(
            <div>
                <button className={"hamburger hamburger--collapse " + this.state.buttonStatus} type="button" onClick={this.changeClicked}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                <Sidebar pose={this.state.clicked ? 'open' : 'closed'}>
                    <ul>
                        <NavItem>
                            <a>thes</a>
                        </NavItem>
                    </ul>
                </Sidebar>
            </div>
        );
    }
}