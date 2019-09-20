import React, { useEffect, useState } from 'react';
import './home.scss';
import ContentPane from '../src/components/ContentPane/contentPane';
import Footer from '../src/components/Footer/footer';
import Header from '../src/components/Header/header';
import NavigationBar from '../src/components/NavigationBar/NavigationBar';

const Home = () => {
  return (
    <div className="homeMain">
      <Header />
      <NavigationBar />
      <ContentPane order="primary"/>
      <ContentPane order="secondary"/>
      <ContentPane order="primary"/>
      <ContentPane order="secondary"/>
      <ContentPane order="primary"/>
      <Footer />
    </div>
  )
};

export default Home;
