import React from 'react';
import '../home/home.css'
import Navbar from './navbar/Navbar';
import Gif from './Gif/Gif';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Gif />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
