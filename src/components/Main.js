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
      <div className='mt-10'>
        <h1>OUR POPULAR COLLECTIONS</h1>
        <div className=' mt-10 grid grid-cols-2 gap-5 '>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src="image/1.jpeg" alt='' className='object-cover '/>
            <audio>
              <source src="audio/1.mp4"/>
            </audio>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div>
              <button className='bg-orange-600 rounded-lg text-white gap-10 p-2'>SOLD</button>
            </div>
          </div>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src='image/1.jpeg' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div>
              <button className='bg-orange-600 rounded-lg text-white gap-10 p-2'>SOLD</button>
            </div>
          </div>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src='img/main.png' alt='' className='w-full h-32 sm:h-48 object-cover'/>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div className='bg-orange-600 rounded-lg text-white gap-10 p-2'>
              <button>SOLD</button>
            </div>
          </div>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src="image/2.jpeg" alt='' className='object-cover '/>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div className='bg-orange-600 rounded-lg text-white gap-10 p-2'>
              <button>SOLD</button>
            </div>
          </div>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src="image/3.jpeg" alt='' className='object-cover '/>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div className='bg-orange-600 rounded-lg text-white gap-10 p-2'>
              <button>SOLD</button>
            </div>
          </div>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src='img/main.png' alt='' className='w-full h-32 sm:h-48 object-cover '/>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div className='bg-orange-600 rounded-lg text-white gap-10 p-2'>
              <button>SOLD</button>
            </div>
          </div>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src='img/main.png' alt='' className='w-full h-32 sm:h-48 object-cover '/>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div className='bg-orange-600 rounded-lg text-white gap-10 p-2'>
              <button>SOLD</button>
            </div>
          </div>

          <div className='rounded shadow-md p-4 object-cover'>
            <img src='img/main.png' alt='' className='w-full h-32 sm:h-48 object-cover '/>
            <div className='p-2'>
              <h1 className='text-center'>CAR NAME</h1>
            </div>
            <div className='bg-orange-600 rounded-lg text-white gap-10 p-2'>
              <button>SOLD</button>
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
