import  Reacts  from "react";
import ReactPlayer from 'react-player';
import { AudioHTMLAttributes } from "react";

function Main() {
  return (
    <div className=" bg-black text-center justify-center pt-5 text-gray-400">
      <div>
        <p>Number One Best Selling Music NFT Platform WORLDWIDE</p>
        <p>Music NFT Sales</p>
        <p>Beat NFT Sales</p>
        <p>Blockchain Music/Beat Aunctioning</p>
      </div>
      <div className='mt-10 '>
        <h1 className="underline font-bold text-lg text-yellow-300">OUR POPULAR COLLECTIONS</h1>

        <div className=' mt-10 grid grid-cols-2 gap-5 p-2'>

        <div className='rounded shadow-md p-4 object-cover'>
                    <img src='image/1.jpeg' alt='' className='w-full h-32 sm:h-48 object-cover '/>
                    <div className='p-2'>
                        <h1 className='text-center'>CAR NAME</h1>
                        <span>$100</span>
                    </div>
                    <div className=' text-white flex gap-10 p-2'>
                        <div className='bg-gray-500 p-2 px-4 rounded-full'>
                            <span>DISCOUNT</span>
                        </div>
                        <div className='bg-orange-600 rounded-full p-2 px-4'>
                        <h2 to='/Payment'>BUY</h2>
                        </div>
                    </div>
                </div>

          <div className='rounded shadow-green-600 sm:w-48 bg-gray-600  relative'>
            <img src="image/1.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className=" justify-between font-semibold text-white ">
              <p className="uppercase">Sam</p>
              <p>Ghost Beat</p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-green-600 font-bold rounded-lg text-white px-4 p-2'>BUY</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$2000</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/2.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className=" justify-between font-semibold  text-white ">
              <p className="uppercase">Christian Griffith</p>
              <p> ozone </p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/2.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$1650</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/3.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className=" justify-between font-semibold text-white">
              <p className="uppercase">Ivan</p>
              <p> Babytron </p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/1.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$1500</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/4.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="justify-between font-semibold  text-white ">
              <p className="uppercase">Eetu</p>
              <p>We so proud of him</p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/4.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$1400</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/5.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className=" justify-between font-semibold text-white">
              <p className="uppercase"> Jake</p>
              <p> Passenger </p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/5.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$1650</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/6.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="justify-between font-semibold text-white ">
              <p className="uppercase"> Hazim Can</p>
              <p>Supertrap </p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/6.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$1600</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/7.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="justify-between font-semibold text-white ">
              <p className="uppercase">Canis</p>
              <p>coated </p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/7.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-green-600 font-bold rounded-lg text-white px-4 p-2'>BUY</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$1700</span>
            </div>
          </div>

          <div className='rounded shadow-green-600 shadow sm:w-48 bg-gray-600 overflow-hidden relative'>
            <img src="image/8.jpeg" alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className="justify-between font-semibold text-white ">
              <p className="uppercase">Pat</p>
              <p>Slay clan</p>
            </div>
            <audio controls className="h-10 w-full p-2">
            <source src="audio/8.mpeg"/>
            </audio>
            <div className="p-2">
              <button className='bg-orange-600 font-bold rounded-lg text-white px-4 p-2'>SOLD</button>
            </div>
            <div className="absolute top-0 bg-white rounded-lg p-1 m-4 font-bold">
              <span>$1400</span>
            </div>
          </div>


        </div>
      </div>
      <div className="text-white p-10  justify-center text-center">
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
