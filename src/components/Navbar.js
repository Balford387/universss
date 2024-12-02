import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";

const Navbar = () => {
  const [Nav, setNav] = useState(false)

    function handleClick ()  {
      setNav(!Nav)
    }

  return (
    <div className='flex justify-around bg-gray-300 mx-auto'>
        <h1 className='text-green-800 w-full font-bold text-center p-4 font-serif text-3xl'>TUNIVERSE</h1>
            <div onClick={handleClick} className='md:hidden p-4 flex'>
              {Nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
            </div>
            <div className= {Nav ? 'fixed bg-gray-200 left-0 top-0 w-[50%] h-full border-r border-r-gray-600 ease-in-out duration-500 lg:hidden': 'fixed left-[-100%] '}>
              <h1 class=' w-full underline font-bold text-center p-4 text-xl'>TUNIVERSE</h1>
              <ul class='uppercase '>
                <li class='p-4 border-b border-gray-600' >Contact Us</li>
                <li class='p-4 border-b border-gray-600' >About Us</li>
                <li class='p-4 border-b border-gray-600' >Terms/Conditioins</li>
                <li class='p-4 border-b border-gray-600' >Copyright</li>
                <li class='p-4 border-b border-gray-600' >Register</li>
              </ul>
            </div>
    </div>
  )
}

export default Navbar;