import React from 'react'
import Navbar from '../components/Navba';
import Footer from '../components/Footer';

function Terms() {
  return (
    <div className='h-screen  justify-center justify-items-center'>
      <Navbar/>
        <div className='bg-black text-white text-center shadow-2xl shadow-white px-10 py-32 border-yellow-100'>
            <p>PLEASE READ THIS TERMS OF SERVICE CAREFULLY. IT SETS FORTH THE LEGALLY BINDING TERMS AND CONDITIONS FOR YOUR USE OF THE SERVICE, INCLUDING THE PURCHASE AND SALE OF NFTs CONTENT AND OTHER SERVICES WE MAKE AVAILABLE THROUGH OUR PLATFORM. THESE TERMS REQUIRE YOU ARBITRATE ANY DISPUTES YOU HAVE WITH US AND YOU WAIVE THE ABILITY TO BRING CLAIMS AGAINST US IN A CLASS ACTION FORMAT. BY USING THE SERVICE, YOU ACKNOWLEDGE AND ACCEPT THE TUNIVERSE CODE OF CONDUCT.
THIS AGREEMENT, INCLUDING THE PROPER VERIFICATION OF NFT SELLER BEFORE PAYMENT IS MADE TO AVOID PROPERTY THEFT AND COPYRIGHT ISSUES DUE TO THE NATURE OF NFT SOLD ON OUR PLATFORM. BY AGREEING TO SELL ON OUR PLATFORM, BY SELLING ON OUR PLATFORM EITHER TRUE 3RD PARTY SELLERS OR IN PERSON. WE HERE BY POSSESSE THE RIGHT TO PROPERLY VERIFY OWNERSHIP OF PROPERTY.</p>
        </div>
      <Footer/>
    </div>
  )
}

export default Terms;