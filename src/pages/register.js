import React from 'react'
import Navbar from '../components/Navba';
import Footer from '../components/Footer';

function Register() {
  return (
    <div className='h-screen  justify-center justify-items-center'>
      <Navbar/>
        <div className='bg-black text-white text-center shadow-2xl shadow-white px-24 py-32 border-yellow-100'>
            <p>REGISTRATION ONLY AVAILABLE FOR OLD AND PRE-EXISTING CUSTOMERS AT THE MOMENT PLEASE CONTACT OUR CUSTOMER SERVICE FOR MORE INFORMATIONS!!.</p>
        </div>
      <Footer/>
    </div>
  )
}

export default Register;