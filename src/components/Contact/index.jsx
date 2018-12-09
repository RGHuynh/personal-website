import React from 'react';
import ContactBg from '../../images/contactBG.svg'
import './index.css';

export default function Contact() {
    return(
        <section className="contact-container" style={{backgroundImage: `url(${ContactBg})`}}>
            <h1 className="contact-form-title">CONTACT</h1>
            <div className="contract-wrapper container">
                <form>
                    <div className="form-group">
                        <input className="form-control form__color" type="text" placeholder="name" />
                    </div>

                    <div className="form-group">
                        <input className="form-control form__color" type="text" placeholder="Enter Email" />
                    </div>

                    
                    <div className="form-group">
                        <textarea className="form-control form__color" type="text" row="5" placeholder="Your Message"></textarea>
                    </div>
                    
                    <input type="buttone" />
                </form>
            </div>
        </section>
    );
}