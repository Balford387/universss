import React from 'react'
import Navbar from '../components/Navba';
import Footer from '../components/Footer';

function Register() {
  return (
    <div className='h-screen justify-center justify-items-center'>
      <Navbar/>
        <div className='bg-black text-white text-center '>
            <p>Register</p>
        </div>
      <Footer/>
    </div>
  )
}

export default Register;