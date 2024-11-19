import React , {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './tabPages.css'
export default function TabPages() {

  const [tabData , setTabData] = useState([
    {id:1 , src:"/user.png" , path:'/'},
    {id:2 , src:"/skills.png" , path:'/skills'},
    {id:3 , src:"/road.png" , path:'/mhmrez'},
    {id:4 , src:"/contact.png" , path:'/contact'},
  ])
  return (
    <div id='parent-box-pages' className='flex md:block space-x-3 md:space-x-0'>
      {tabData.map(tab =>(
        <NavLink to={`${tab.path}`} key={tab.id} className={(link)=> link.isActive ? 'active-route' : ''}> 
        <div  className='bg-select_page py-6 mb-3 rounded-full flex justify-center min-w-[60px]' id='pages-link'>
          <img src={tab.src} alt={tab.src} className='w-4' />
        </div>
        </NavLink>

      ))}
    </div>
  )
}
