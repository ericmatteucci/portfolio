import React, { useEffect, useState } from 'react';
import Header from '../src/components/Header/header';

const Home = () => {
  return (
    <div>
      <Header />
      <style jsx global>{`
        body {
          background: #000;
          margin: 0;
        }`
      }</style>
    </div>
  )
};

export default Home;
