import React, {useState, useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  

  const list =["Cars for Sale","New cars","Sell Your Car",]
  const [Nav, setNav] = useState(false)

    function handleClick ()  {
      setNav(!Nav)
    }

  return (
    <div className='flex justify-around bg-gray-300 mx-auto'>
        <h1 className ='text-4xl w-full font-bold text-center p-4 font-serif'>T-Universe</h1>
            <ul className='hidden lg:flex flex-row gap-2'>
                {
                    list.map((item) => (
                        <li className='py-2 px-4 bg-gray-400 rounded text-white'>
                            {item}
                        </li>
                    ))
                }
            </ul>
            
            
            <div onClick={handleClick} className=' md:hidden p-4 flex'>
              {Nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
            </div>
            <div className= {Nav ? 'fixed bg-gray-200 z-20 left-0 top-0 w-[50%] h-full border-r border-r-gray-600 ease-in-out duration-500 lg:hidden': 'fixed left-[-100%] '}>
              <h1 className='text-4xl w-full underline font-bold text-center p-4'>T-Universe.</h1>
              <ul className='uppercase '>
              <Link to="/Home">
                <li className='p-4 border-b border-gray-600' >Home</li>
                </Link>
                <Link to="/Contact">
                <li className='p-4 border-b border-gray-600' >Contact</li>
                </Link>
                <Link to="/About">
                <li className='p-4 border-b border-gray-600' >About Us</li>
                </Link>
                <Link to="/Privacy">
                <li className='p-4 border-b border-gray-600' >Privacy</li>
                </Link>
                <Link to="/Terms">
                <li className='p-4 border-b border-gray-600' >Terms</li>
                </Link>
                <Link to="/Register">
                <li className='p-4 border-b border-gray-600' >Register</li>
                </Link>
              </ul>
            </div>
    </div>
  )
}

export default Navbar