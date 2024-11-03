import React from 'react'
import LeftSide from '../../Components/LeftSide/LeftSide'
import RightSide from '../../Components/RightSide/RightSide'
import Form from './Form'
export default function Contact() {
  return (
      <div className='flex flex-col md:flex-row items-center justify-items-stretch sm:items-stretch space-x-10'>
        <div className='max-w-[400px] rounded-lg'>
      <LeftSide />
        </div>
        <div className=' flex flex-col-reverse lg:flex-row relative w-[90%] md:w-[100%]' id='right-side'>
      <RightSide>
        <Form/>
      </RightSide>
        </div>
          
      </div>
  )
}
