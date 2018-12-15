import React from 'react';
import ContactBg from '../../images/contactBG.svg';
import ScrollableAnchor from 'react-scrollable-anchor';
import './index.css';

export default function Contact() {
    return(
        <ScrollableAnchor id={'contact'}>
            <section className="contact-container" style={{backgroundImage: `url(${ContactBg})`}}>
                <h1 className="contact-form-title">CONTACT</h1>
                <div className="contact-wrapper container">
                    <form>
                        <div className="form-group">
                            <input className="form-control form__color" type="text" placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <input className="form-control form__color" type="text" placeholder="Enter Email" />
                        </div>

                        
                        <div className="form-group">
                            <textarea className="form-control form__color" type="text" row="5" placeholder="Your Message"></textarea>
                        </div>
                        
                        <input className="btn btn__color btn__size" type="button" value="Send"></input>
                    </form>
                </div>
            </section>
        </ScrollableAnchor>
    );
}