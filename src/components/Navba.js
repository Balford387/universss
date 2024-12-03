import React, {useState, useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  

  const list =["Cars for Sale","New cars","Sell Your Car",]
  const [Nav, setNav] = useState(false)

    function handleClick ()  {
      setNav(!Nav)
    }

  return (
    <div class='flex justify-around bg-gray-300 mx-auto'>
        <h1 class='text-4xl w-full font-bold text-center p-4 font-serif'>GetCaRs</h1>
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
            <div className= {Nav ? 'fixed bg-gray-200 left-0 top-0 w-[50%] h-full border-r border-r-gray-600 ease-in-out duration-500 lg:hidden': 'fixed left-[-100%] '}>
              <h1 class='text-4xl w-full underline font-bold text-center p-4'>GetCaRs.</h1>
              <ul class='uppercase '>
                <li class='p-4 border-b border-gray-600' >Cars for Sale</li>
                <li class='p-4 border-b border-gray-600' >New cars</li>
                <li class='p-4 border-b border-gray-600' >Sell Your Car</li>
                <li class='p-4 border-b border-gray-600' >Research & Review</li>
                <li class='p-4 border-b border-gray-600' >about</li>
                <li class='p-4 border-b border-gray-600' >contact</li>
              </ul>
            </div>
    </div>
  )
}

export default Navbar