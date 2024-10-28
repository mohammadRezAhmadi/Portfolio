import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
export default function Socials() {
  return (
    <div className='flex flex-row text-center mt-10 flex-wrap'>
      <a href="#" className='bg-[#229ED9] basis-1/5 py-4 group'id='link-social'>
        <TelegramIcon className='group-hover:scale-125 group-hover:transition-all'/>
      </a>
      <a href="https://github.com/mohammadRezAhmadi" className='bg-[#6cc644] basis-1/5 py-4 group' target='_blank' id='link-social'>
        <GitHubIcon className='group-hover:scale-125 group-hover:transition-all'/>
      </a>
      <a href="#" className='bg-[#1DA1F2] basis-1/5 py-4 group' id='link-social'>
        <XIcon className='group-hover:scale-125 group-hover:transition-all'/>
      </a>
      <a href="#" className='bg-[#B7081B] basis-1/5 py-4 group' id='link-social'>
        <PinterestIcon className='group-hover:scale-125 group-hover:transition-all'/>
      </a>
      <a href="https://www.linkedin.com/in/mohammadreza-ahmadi-b06aaa209" id='link-social' target='_blank' className='bg-[#0077b5] basis-1/5 py-4 group'>
        <LinkedInIcon className='group-hover:scale-125 group-hover:transition-all'/>
      </a>
    </div>
  )
}
