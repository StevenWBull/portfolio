import React from 'react';
import './Registry.css';

const Registry = () => {
    const urlArr = [
        'https://www.target.com/gift-registry/gift/stevenandana2022', 
        'https://www.amazon.com/baby-reg/steven-bull-april-2022-hockley/2I86DMLZA39OP', 
        'https://www.buybuybaby.com/store/giftregistry/viewregistryguest/550755200?eventType=Baby'
    ];

    const redirectToRegistry = (url) => {
        return window.open(url, "_blank");
    }

    return (
        <section className='registry-page'>
            <div className="registry-link-cont">
                <img className='logo' src='./target-logo.png' onClick={() => redirectToRegistry(urlArr[0])} />
                <button type="button" className='btn btn-primary' onClick={() => redirectToRegistry(urlArr[0])}>View Registry</button><br/>
                <span id="bbb-coupon" className='hidden'>*Be sure to use your Bed Bath and Beyond coupons here!</span>
            </div>
            <div className="registry-link-cont">
                <img className='logo' src='./amazon-logo.png' onClick={() => redirectToRegistry(urlArr[1])}/>
                <button type="button" className='btn btn-primary' onClick={() => redirectToRegistry(urlArr[1])}>View Registry</button><br/>
                <span id="bbb-coupon" className='hidden'>*Be sure to use your Bed Bath and Beyond coupons here!</span>
            </div>
            <div className="registry-link-cont">
                <img className='logo' src='./buy-buy-baby-logo.png' onClick={() => redirectToRegistry(urlArr[2])} />
                <button type="button" className='btn btn-primary' onClick={() => redirectToRegistry(urlArr[2])}>View Registry</button><br/>
                <span id="bbb-coupon">*Be sure to use your Bed Bath and Beyond coupons here!</span>
            </div>
        </section>
    );
}

export default Registry;