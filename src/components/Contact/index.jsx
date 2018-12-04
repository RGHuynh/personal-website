import React from 'react';
import './index.css';

export default function Contact() {
    return(
        <section>
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
        </section>
    );
}