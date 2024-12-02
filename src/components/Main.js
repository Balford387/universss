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

        <div className=' mt-10 grid grid-cols-2 gap-5 overflow-hidden '>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/1.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="flex justify-between font-semibold px-5 text-white py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 sm:w-28 p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div>
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/2.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="flex justify-between font-semibold px-5 text-white py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 sm:w-28 p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div>
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/3.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="flex justify-between font-semibold px-5 text-white py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 sm:w-28 p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div>
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/4.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="flex justify-between font-semibold px-5 text-white py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 sm:w-28 p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div>
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/5.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="flex justify-between font-semibold px-5 text-white py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 sm:w-28 p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div>
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/6.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="flex justify-between font-semibold px-5 text-white py-2">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 sm:w-28 p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div>
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>


        </div>
      </div>
      <div className="text-white p-10 justify-items-center justify-center text-center">
        <h1>LATTEST COLLECTIONS</h1>
        <div className="pt-2 grid gap-2 justify-items-center justify-center text-center">
          <div>
            <video controls>
              <source src="video/vid1.mp4"/>
            </video>
            <button className="bg-orange-600 font-bold rounded-lg text-black px-4 p-2">SOLD</button>
          </div>
          <div>
            <video controls autoPlay>
              <source src="video/vid2.mp4"/>
            </video>
            <button className="bg-orange-600 font-bold rounded-lg text-black px-4 p-2">SOLD</button>
          </div>
          <div>
            <video controls autoPlay>
              <source src="video/vid3.mp4"/>
            </video>
            <button className="bg-orange-600 font-bold rounded-lg text-black px-4 p-2">SOLD</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Main;
