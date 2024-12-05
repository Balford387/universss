import React from 'react'
import Navba from '../components/Navba';
import Footer from '../components/Footer';

function About() {
  return (
    <div className='bg-black'>
        <div>
          <Navba/>
          <div>
            <p>
              Contact page
            </p>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default About;