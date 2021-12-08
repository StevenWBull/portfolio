import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Accordion from '../Accordion/Accordion';
import MaintenancePage from '../MaintenancePage/MaintenancePage';
import './App.css';

function App() {
  return (
    <>
    <Nav />
      <main>
        <MaintenancePage />
        {/* <Header />
        <Accordion title='About Me' component={AboutMe} />
        <Accordion title='Skills' component={Skills} />
        <Accordion title='Projects' component={Projects} /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;