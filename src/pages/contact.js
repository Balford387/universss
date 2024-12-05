import React from 'react'
import Navbar from '../components/Navba';
import Footer from '../components/Footer';
import {
  FaTelegram,
} from 'react-icons/fa';

function Contact() {
  return (
    <div className='h-screen  justify-center justify-items-center'>
      <Navbar/>
        <div className='bg-black text-white justify-items-center text-center shadow-2xl shadow-white px-24 py-32 border-yellow-100'>
            <p>Contact us</p>
            <div className='flex mb-10'>
            <a href='https://t.me/TUniverse0'>
            <FaTelegram size={50} color='blue' className='p-2'/>
            </a>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact;