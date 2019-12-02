import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects'
import './App.css';

function App() {
  return (
    <>
    <Nav />
      <main>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;