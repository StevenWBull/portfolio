import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import './App.css';

function App() {
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

export default App;