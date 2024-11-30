import React, {useState, useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";

const Navbar = () => {

  const list =["Cars for Sale","New cars","Sell Your Car",]
  const [Nav, setNav] = useState(false)

    function handleClick ()  {
      setNav(!Nav)
    }

  return (
    <div className='flex justify-around bg-gray-300 mx-auto'>
        <h1 className=' w-full font-bold text-center p-4 font-serif text-2xl'>TUNIVERSE</h1>
            
            <div onClick={handleClick} className=' md:hidden p-4 flex'>
              {Nav ? <AiOutlineClose size={45}/> : <AiOutlineMenu size={45}/>}
            </div>
            <div className= {Nav ? 'fixed bg-gray-200 left-0 top-0 w-[50%] h-full border-r border-r-gray-600 ease-in-out duration-500 lg:hidden': 'fixed left-[-100%] '}>
              <h1 class='text-4xl w-full underline font-bold text-center p-4 text-xl'>TUNIVERSE</h1>
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

export default Navbar;