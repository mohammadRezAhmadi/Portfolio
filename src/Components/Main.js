import React from 'react'
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

export default function Main({children}) {
  return (
    <div className='flex flex-col md:flex-row items-center justify-items-stretch sm:items-stretch space-x-10'>
    <div className='max-w-[400px] rounded-lg'>
  <LeftSide />
    </div>
    <div className=' flex flex-col-reverse lg:flex-row relative w-[90%] md:w-[100%]'>
  <RightSide>

    {children}
  </RightSide>
    </div>
      
  </div>
  )
}
