import React, { useEffect, useState } from 'react';
import './Rsvp.css';

const Rsvp = (props) => {
    const [selectVal, setSelectVal] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        return props.onSubmitSaveForm();
    }

    useEffect(() => {
        return props.onRsvpInfoChange('attendingVia', props.attendStatus);
    }, [])

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'attendingVia')
            setSelectVal(value);
        return props.onRsvpInfoChange(name, value);
    }

    return (
        <section>
            <div className="main">
                <h3 className="sign">RSVP</h3>
                <div className="section-cont">
                    <div className="info-div">
                        <div>
                            <h3>When:</h3>
                            <p>2-5pm on Saturday, February 5th</p>
                        </div>
                        <div>
                            <h3>Where:</h3>
                            <p>Falls at Dry Creek Clubhouse</p>
                            <p>16516 Dry Creek Falls Blvd</p>
                            <p>Cypress, TX 77433</p>
                        </div>
                    </div>
                    <form action="" className="login-page-form" onSubmit={handleFormSubmit}>        
                        <input onChange={handleInputChange} className="un" type="text" placeholder="First & Last Name" name="fullName" required/>
                        <input onChange={handleInputChange} className="un" type="number" placeholder="# of Attendees" name="numOfAttendees" required/>
                        <input onChange={handleInputChange} className="un demoCellNum" type="text" placeholder="Cell Phone" name="cellPhone" pattern="\d*" required/>
                        <input onChange={handleInputChange} className="un" type="text"  placeholder="Email" name="email" required/>
                        <select onChange={handleInputChange} className="un dmsDD" name="attendingVia" defaultValue={props.attendStatus} required>
                            <option value="" disabled>I will attend...</option>
                            <option value="in person">In Person</option>
                            <option value="virtually">Virtually</option>
                        </select>
                        <div className="submit-btn-cont">
                            <button id="demo-submit" className="submit" type="submit">Submit!</button><br/>
                            {(props.attendStatus === 'virtually' || selectVal === 'virtually') && <span className="virtual-disclaimer">*You will receive a virtual link via email closer to the shower!</span>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Rsvp;