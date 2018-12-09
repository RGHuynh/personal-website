import React from 'react';
import ContactBg from '../../images/contactBG.svg'
import './index.css';

export default function Contact() {
    return(
        <section className="contact-container" style={{backgroundImage: `url(${ContactBg})`}}>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" value="name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" value="Enter Email" />
                    </div>

                    
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" type="text" row="5" value="Your Message"></textarea>
                    </div>
                    
                    <input type="buttone" />
                </form>
            </div>
        </section>
    );
}