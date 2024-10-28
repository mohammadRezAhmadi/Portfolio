import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  return (
    <div style={{marginBottom: '10px'}}>
      <TypeAnimation
  cursor={true} 
  className={"text-title text-2xl"}
  sequence={['Mhmrez.', 1000 , '']}
  repeat={Infinity}
  deletionSpeed={99}
/>
      {/* <h1 className='text-title text-2xl mb-4'>Mhmrez.</h1> */}
    </div>
  )
}
