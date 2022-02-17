import React from 'react';
import Header  from '../components/home/Header';
import Aside from '../components/home/Aside';
import Main from '../components/home/Main';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Header />
      <div className='Aside_main'>
        <Aside />
        <Main />
      </div>
    </div>
  )
}

export default Home;
