import React from 'react'
import { BsBell } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
      <img  className='h-8'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluArKhcKNYcRBrTznCWC6LLhtMjtTYePMow&usqp=CAU' alt='hamburger-menu'/>
      <img  className='h-8 mx-2' src='https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png' alt='youtube-logo'/>
      </div>
<div className='col-span-10 px-10 flex items-center'>
<input className='w-1/2 border border-gray-400 p-2 rounded-l-full'type='text' placeholder='Search'/>
<button className='border border-gray-400 px-5 py-2 rounded-r-full bg-slate-100'><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
</svg></button>
<img
className="h-8 border border-gray-200 rounded-full ml-3 bg-gray-100" src='https://i.pinimg.com/originals/74/ce/14/74ce14befb22695743659cf8a8290c2b.png'alt='mic'  />
</div>
<div className="flex col-span-1 items-center">
<BiVideoPlus className="h-8 mr-7 text-3xl" />
<BsBell className="h-8 mr-7 text-2xl" />
<img className='h-8' src='https://cdn-icons-png.flaticon.com/512/666/666201.png' alt='user-icon'/>
</div>
    </div>
  )
}

export default Head
