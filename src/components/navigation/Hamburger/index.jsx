import React, {Component} from 'react';
import './index.css';


export default class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: true,
            buttonStatus: ''
        }
        this.changeClicked = this.changeClicked.bind(this);
    }

    changeClicked() {
        if(this.state.clicked) {
            this.setState({
                buttonStatus: 'is-active',
                clicked: !this.state.clicked
            })
        }
        else {
            this.setState({
                buttonStatus: '',
                clicked: !this.state.clicked
            })
        }
    }

    render(){
        return(
            <button className={"hamburger hamburger--collapse " + this.state.buttonStatus} type="button" onClick={this.changeClicked}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        );
    }
}