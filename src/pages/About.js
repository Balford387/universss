import React from 'react'
import Navbar from '../components/Navba';
import Footer from '../components/Footer';

function About() {
  return (
    <div className='h-screen  justify-center justify-items-center'>
      <Navbar/>
        <div className='bg-black text-white text-center shadow-2xl shadow-white px-24 py-32 border-yellow-100'>
            <p>About Us- With 2years of our platform been available on the market, been specially dedicated to a different innovation of NFTs, which looks into the future of Music NFTs. We are one of the top Music NFT platforms worldwide.</p>
        </div>
      <Footer/>
    </div>
  )
}

export default About;