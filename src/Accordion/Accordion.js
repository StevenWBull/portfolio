import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({ component, ...props }) {
  const [ setActive, setActiveState ] = useState('');

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
  }
  
  const Component = component
  return (
    <div className='accordion__section'>
      <button className='accordion'>
        <h3 className='accordion__title'>{props.title}</h3>
      </button>
      <div className='accordion__content'>
        <Component />
      </div>
    </div>
  )
}