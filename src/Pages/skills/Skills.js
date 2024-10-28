import React , {useEffect}from 'react'
import Header from '../../Components/Header/Header';
import LeftSide from '../../Components/LeftSide/LeftSide';
import RightSide from '../../Components/RightSide/RightSide';
import HrAnime from '../../Components/hrAnimation/HrAnime';
import Items from './Items';
import Data from './dataSkills'
import './items.css'




export default function Skills() {
  // useEffect(()=>{
  //     document.querySelectorAll("#box-skills").classList.add('skill-loading')
  // })
  return (
      <div className='flex flex-col md:flex-row items-center sm:items-stretch space-x-10 max-h-[914px] min-h-[914px]'>
        <div className='max-w-[400px] rounded-lg'>
      <LeftSide />
        </div>
        <div className=' flex flex-col-reverse sm:flex-row relative w-[90%] md:w-[100%]' id='right-side'>
      <RightSide>
          <HrAnime title="WHAT I DO" head="Services"/>
          <div id='container-skills' className='flex flex-col md:flex-row flex-wrap space-y-12 justify-evenly items-center space-x-7 z-10 relative h-[100%] lg:overflow-y-scroll py-16'>
            {Data.map(data =>(
              <Items key={data.id} {...data}/>
            ))}
          </div>
      </RightSide>
        </div>
      </div>
  )
}
