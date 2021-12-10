import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
      <Nav />
        <main>
          <MaintenancePage />
          <Footer />
        </main>
      </>
    );
  }
}