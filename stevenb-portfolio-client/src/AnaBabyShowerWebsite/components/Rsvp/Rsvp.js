import React, { Component } from 'react';
import './Rsvp.css';

const Rsvp = (props) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        return props.onSubmitSaveForm();
    }

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        return props.onRsvpInfoChange(name, value);
    }

    return (
        <section>
            <div className="main">
                <p className="sign">RSVP</p>
                <form action="" className="login-page-form" onSubmit={handleFormSubmit}>        
                    <input onChange={handleInputChange} className="un" type="text" placeholder="First & Last Name" name="fullName" required/>
                    <input onChange={handleInputChange} className="un" type="number" placeholder="# of Attendees" name="numOfAttendees" required/>
                    <input onChange={handleInputChange} className="un demoCellNum" type="text" placeholder="Cell Phone" name="cellPhone" pattern="\d*" required/>
                    <input onChange={handleInputChange} className="un" type="text"  placeholder="Email" name="email" required/>
                    <select onChange={handleInputChange} className="un dmsDD" name="attendingVia" defaultValue="" required>
                        <option value="" disabled>I will attend...</option>
                        <option value="in person">In Person</option>
                        <option value="virtually">Virtually</option>
                    </select>
                    <div className="submit-btn-cont">
                        <button id="demo-submit" className="submit" type="submit">Submit!</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Rsvp;