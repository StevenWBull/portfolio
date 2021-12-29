import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import Home from '../Home/Home';
import Rsvp from '../Rsvp/Rsvp';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

const App = () => {
  const [rsvpInfo, setRsvpInfo] = useState({})

  const onRsvpInfoChange = (name, value) => {
    return setRsvpInfo(prevRsvpInfo => ({ ...prevRsvpInfo, [name]: value }));
  }

  const onSubmitSaveForm = () => {
    console.log(rsvpInfo)
  }

  return (
    <>
      <Nav />
        <main style={{"background": "transparent"}}>
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/rsvp'} element={<Rsvp onRsvpInfoChange={onRsvpInfoChange} onSubmitSaveForm={onSubmitSaveForm} />} />
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;