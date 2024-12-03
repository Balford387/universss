import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu,} from "react-icons/ai";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const Content = <>
  <div className='lg:hidden block absolute top-10'>
    <ul>
      <Link to="Contact">
        <li>Contact</li>
      </Link>
      <Link>
        <li>Contact</li>
      </Link>
      <Link>
        <li>Contact</li>
      </Link>
      <Link>
        <li>Contact</li>
      </Link>
    </ul>
  </div>
  </>

  return (
    <>
      <nav>
        <div className='flex flex-1 justify-between'>
          <div>
            <span>Logo</span>
          </div>
          <div className='hidden'>
            <div>
              <ul>
                <Link to="Contact">
                  <li>Contact</li>
                </Link>
                <Link to="Contact">
                  <li>Contact</li>
                </Link>
                <Link to="Contact">
                  <li>Contact</li>
                </Link>
                <Link to="Contact">
                  <li>Contact</li>
                </Link>
                <Link to="Contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;