import React from 'react'
import {
  FaTelegram,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='bg-gray-200 p-2 max-auto '>
        <div className='font-bold'>
            <h1>Conect with Us</h1>
        </div>
        <div>
          <div className='flex justify-items-center mb-10'>
            <a href=''>
            <FaTelegram size={50} color='blue' className='p-2'/>
            </a>
            
          </div>
        </div>
        <div className='underline font-semibold text-justify '>
          <p>Terms & Conditioin</p>
          <p>Privacy Notice</p>
          <p>About Us</p>
          <p>Register</p>
          <p></p>
        </div>
        <div className='pt-4'>
          <p>&copy;2024 GetCaRs.com. All right reserved.</p>
        </div>
    </div>
  )
}
export default Footer;