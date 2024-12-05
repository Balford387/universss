import React from 'react'
import Navbar from '../components/Navba';
import Footer from '../components/Footer';

function Buy() {
  return (
    <div className='h-screen justify-center justify-items-center'>
        <Navbar/>
        <div className='bg-black text-gray-400 text-left shadow-2xl shadow-white p-10 border-yellow-100'>
            <div className='bg-white rounded-lg p-2'>
                <div  className='grid gap-2 pb-2'>
                    <div>
                        <p>Name</p>
                        <input
                        className='border'/>
                    </div>
                    <div>
                        <p>Card Number</p>
                        <input
                        className='border'/>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                       
                        <p>Cvv</p>
                        <input
                        className='border w-20'/>
                    </div>
                </div>

                <div className='flex gap-1 overflow-hidden justify-between h-20 w-full'>
                    <div className=' overflow-hidden '>
                        <img src="image/visa.png" alt='' className=' object-cover'/>
                    </div>
                    <div className=' overflow-hidden '>
                        <img src="image/mastercard.png" alt='' className=' object-cover'/>
                    </div>
                    <div className=' overflow-hidden'>
                        <img src="image/paypal.png" alt='' className=' object-cover'/>
                    </div>
                </div>

                <div className='justify-center justify-items-center pl-28 p-2'>
                    <button className='bg-orange-600 p-4 w-full justify-center justify-items-center rounded-lg'>SEND</button>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Buy;