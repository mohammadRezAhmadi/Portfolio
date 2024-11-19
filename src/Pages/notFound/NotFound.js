import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function NotFound() {
  return (
    <div>
      <TypeAnimation
  cursor={true} 
  className={"text-2xl  bg-gradient-to-t from-f1 to-f2 bg-clip-text text-transparent"}
  sequence={['Coming Soon...', 1000]}
/>
    </div>
  )
}
