import React from 'react'
import './hrAnime.css'
export default function HrAnime(props) {

  return (
    <div>
       <h5 className="text-title_sm text-sm">{props.title}</h5>
        <h1 className="text-title text-xl md:text-3xl" id="name">{props.head}</h1>
        <hr color="#3D3D4A" className="w-[100%] opacity-20 my-6 mx-auto" id="hr"></hr>
    </div>
  )
}
