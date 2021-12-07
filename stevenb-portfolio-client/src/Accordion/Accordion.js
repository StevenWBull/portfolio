import React, { useState, useRef } from 'react';
import './Accordion.css';

export default function Accordion({ component, ...props }) {
  const [ setActive, setActiveState ] = useState('');
  const [ setHeight, setActiveHeight ] = useState('0px')

  const content = useRef(null)
  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setActiveHeight(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  
  const Component = component
  return (
    <div className='accordion__section'>
      <button className='accordion' onClick={toggleAccordion}>
        {props.title}
      </button>

      <div className='accordion__content' ref={content} style={{ maxHeight: `${setHeight}` }}>
        <Component />
      </div>
    </div>
  )
}