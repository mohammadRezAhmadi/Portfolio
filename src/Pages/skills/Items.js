import React from 'react'
export default function Items({img , title , level , id}) {
  return (
    <div className='min-w-[210px] h-40 bg-box rounded-[70px] relative pl-10 skill-loading box-skills' >
        <img src={img} className='rounded-full min-w-[95px] max-w-[95px] outline outline-8 outline-outline absolute -left-4 -top-7'/>
        <div  className='relative -right-28 -top-2 rounded-3xl py-4 px-5 bg-base text-[#8F9EA7] z-50 inline'>
          {id}
        </div>
        <div className='flex flex-col mt-16 space-y-1'>
            <span className='text-tag_skill font-thin text-sm'>{title}</span>
            <span className='text-xs text-[#8F9EA7]'>{level}</span>
        </div>

    </div>
  )
}
