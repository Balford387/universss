import React from 'react'
import {Link } from 'react-router-dom'
import {
  FaTelegram,
} from 'react-icons/fa';


export const Footer = () => {
  return (
    <div className='bg-gray-200 p-2 max-auto '>
        <div className='font-bold'>
            <h1>Conect with Us</h1>
        </div>
        <div>
          <div className='flex justify-items-center mb-10'>
            <a href='https://t.me/TUniverse0'>
            <FaTelegram size={50} color='blue' className='p-2'/>
            Telegram
            </a>
            
          </div>
        </div>
        <div className='underline font-semibold text-justify'>
          <Link to="/Contact">
          <p>Contact</p>
          </Link>
          <Link to="/Privacy">
          <p>Privacy Notice</p>
          </Link>
          <Link to="/About">
          <p>About Us</p>
          </Link>
          <Link to="/Terms">
          <p>Terms & Conditioin</p>
          </Link>
        </div>
        <div className='pt-4'>
          <p>&copy;2024 Tuniverse.shop. All right reserved.</p>
        </div>
    </div>
  )
}
export default Footer;