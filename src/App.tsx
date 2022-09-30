import React from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import Header from './components/header/Header';
import Navbar from './components/layout/navbar/navbar';
import Layout_btm from './components/layout/layout_btm/layout_btm';
import About_us from './components/About_us/About_us';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Team from './components/team/Team';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={s.app}>
        <Navbar />
        <Layout_btm/>
        <Header/> 
        <About_us/> 
        <Services/> 
        <Projects/> 
        <Team/> 
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
