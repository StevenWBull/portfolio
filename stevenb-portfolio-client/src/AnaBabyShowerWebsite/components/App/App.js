import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import Home from '../Home/Home';
import Rsvp from '../Rsvp/Rsvp';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
      <Nav />
        <main>
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/rsvp'} element={<Rsvp />} />
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
        </main>
      <Footer />
      </>
    );
  }
}