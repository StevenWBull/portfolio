import React, { Component } from 'react';
import './MaintenancePage.css';

export default class MaintenancePage extends Component {
  render() {
    return (
      <section>
      <img src='expectingSilhouette.png' alt="We're expecting something special..." />
        <h2>Shhh...</h2>
        <p>We are currently creating something special! Please check back soon! ;)</p>
      </section>
    )
  }
}