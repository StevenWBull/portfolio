import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills">
      <div className='skill-div'>
        <h4>Front-End</h4>
        <p>HTML5 | CSS3 | JavaScript | jQuery | React | React Hooks | Context | Jest | Enzyme</p>
      </div>
      <div className='skill-div'>
        <h4>Back-End</h4>
        <p>Node | Express | Knex | SQL | PostgreSQL | Python | Flask | Mocha | Chai | Supertest | RESTful API</p>
      </div>
      <div className='skill-div'>
        <h4>Additional Tools</h4>
        <p>Git | GitHub | NPM | Pipenv | Slack | Agile Methodology</p>
      </div>
    </section>
  )
}