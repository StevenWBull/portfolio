import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
        <section id="home-cont-section">
            <img className="bg" src="baby_pictures_1.jpg" />
            <div className="home-text-cont">
                <div className="Home-container">
                    <h1>Welcome!</h1>
                    <h3>Thank you for celebrating</h3>
                    <h1>Steven Wayne Bull III</h1>
                    <h3>with us!</h3>
                </div>
                <div className="rsvp-btn-container">
                    <div>
                        <span>Join us in Person!</span><br/>
                        <button className="btn btn-primary join-us">RSVP for in Person</button>
                    </div>
                    <h4 className='h4'>OR</h4>
                    <div>
                        <span>Join us Virtually!</span><br/>
                        <button className="btn btn-primary join-us">RSVP for Virtual</button>
                    </div>
                </div>
            </div>
        </section>);
    }
}