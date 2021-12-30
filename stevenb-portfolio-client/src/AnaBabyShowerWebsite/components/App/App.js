import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import Home from '../Home/Home';
import Rsvp from '../Rsvp/Rsvp';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import RsvpApiService from '../../services/rsvp-api-servcie';
import './App.css';
import Registry from '../Registry/Registry';

const App = () => {
  const navigate = useNavigate();
  const [rsvpInfo, setRsvpInfo] = useState({});
  const [attendStatus, setAttendStatus] = useState('');

  const onRsvpInfoChange = (name, value) => {
    return setRsvpInfo(prevRsvpInfo => ({ ...prevRsvpInfo, [name]: value }));
  }

  const onSubmitSaveForm = () => {
    return RsvpApiService.postRsvp(rsvpInfo)
  }

  const onRsvpSelection = (selection) => {
    setAttendStatus(selection);
    return navigate("/rsvp");
  }

  return (
    <>
      <Nav />
        <main style={{"background": "transparent"}}>
          <Routes>
            <Route exact path={'/'} element={<Home onRsvpSelection={onRsvpSelection} />} />
            <Route exact path={'/rsvp'} element={<Rsvp onRsvpInfoChange={onRsvpInfoChange} onSubmitSaveForm={onSubmitSaveForm} attendStatus={attendStatus} />} />
            <Route exact path={'/registry'} element={<Registry />} />
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;