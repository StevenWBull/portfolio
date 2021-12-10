import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
      <Nav />
        <main>
          <Routes>
            <Route exact path={'/'} element={<MaintenancePage />} />
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
        </main>
      <Footer />
      </>
    );
  }
}