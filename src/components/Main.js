import  Reacts  from "react";
import ReactPlayer from 'react-player';
import { AudioHTMLAttributes } from "react";

function Main() {
  return (
    <div className=" bg-black text-center justify-center pt-5 text-gray-600">
      <div>
        <p>Number One Best Selling Music NFT Platform WORLDWIDE</p>
        <p>Music NFT Sales</p>
        <p>Beat NFT Sales</p>
        <p>Blockchain Music/Beat Aunctioning</p>
      </div>
      <div className='mt-10 '>
        <h1 className="underline font-bold text-lg">OUR POPULAR COLLECTIONS</h1>

        <div className=' mt-10 grid grid-cols-2 gap-2 overflow-hidden '>

          <div className='rounded shadow-md grid  bg-gray-600 overflow-hidden relative'>
            <div >
            <img src="image/1.jpeg" alt='' className=' h-32 sm:h-48 object-cover p-2'/>
            </div>
            <div className="flex justify-between font-semibold px-5 text-white py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div>
              <button className='bg-orange-600 rounded-lg text-white gap-10 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-2 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

          <div className='rounded shadow-md grid bg-white relative'>
            <img src="image/1.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="flex justify-between font-semibold px-5 py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
              <audio controls className="">
              <source src="audio/1.mpeg"/>
              </audio>
            <div>
              <button className='bg-orange-600 rounded-lg text-white gap-10 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-2 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

        </div>
      </div>
      <div className="text-white p-10 justify-items-center justify-center text-center">
        <h1>LATTEST COLLECTIONS</h1>
        <div className="pt-2">

        <div>
          <ReactPlayer
            className='react-player'
            
            width='100%'
            height='100%'/>
          <p>Name</p>
          <button className="bg-orange-600 rounded-lg px-4">SOLD</button>
        </div>
        <div>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='100%'
            height='100%'/>
          <p>Name</p>
          <button className="bg-orange-600 rounded-lg px-4">SOLD</button>
        </div>
        <div>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='100%'
            height='100%'/>
          <p>Name</p>
          <button className="bg-orange-600 rounded-lg px-4">SOLD</button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
