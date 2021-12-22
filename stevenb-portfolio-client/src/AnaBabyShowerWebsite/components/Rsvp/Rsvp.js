import React, { Component } from 'react';
import './Rsvp.css';

export default class Rsvp extends Component {
    render() {
        return (
            <section>
                <div className="main">
                    <p className="sign" align="center">RSVP</p>
                    <form action="" className="login-page-form">        
                        <input className="un" type="text" placeholder="First & Last Name" name="fullName"/>
                        <input className="un demoCellNum" type="text" placeholder="Cell Phone" name="cellPhone" pattern="\d*"/>
                        <input className="un" type="text"  placeholder="Email (Optional)" name="email"/>
                        <select className="un dmsDD" name="dmsName" required>
                            <option value="" disabled selected>I will attend...</option>
                            <option value="CDK">In Person</option>
                            <option value="DealerTrack">Virtually</option>
                        </select>
                        <textarea className="un notes" type="text" placeholder="Notes (Optional)" name="notes"></textarea>
                        <div style={{ 'text-align': 'center', 'padding-bottom': '20px' }}>
                            <button id="demo-submit" className="submit">Submit!</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}