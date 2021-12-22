import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
        <section>
            <div className="Home-container">
                <h1>Welcome!</h1>
                <h3>Thank you for celebrating</h3>
                <h1>Steven Wayne Bull III</h1>
                <h3>with us!</h3>
            </div>
            <div className="rsvp-btn-container">
                <div>
                    <span>Join us in Person!</span>
                    <button className="btn btn-primary">RSVP for in Person</button>
                </div>
                <h4>OR</h4>
                <div>
                    <span>Join us Virtually!</span>
                    <button className="btn btn-primary">RSVP for Virtual</button>
                </div>
            </div>
        </section>);
    }
}