import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' bg-code-nav_dash navbar h-screen flex flex-col justify-between text-base'>
        <nav className=' mt-24'>
            <ul>
                <li className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between  '>
                     <div className='flex gap-6 items-center'> 
                     <AiOutlineHome size={18}/>
                       <NavLink to={'/home'}>Home</NavLink>
                     </div>
                       <MdKeyboardArrowRight size={18}/>
                </li>
                <li className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between  '>
                     <div className='flex gap-6 items-center'> 
                     <AiOutlineHome size={18}/>
                       <NavLink to={'/home'}>Home</NavLink>
                     </div>
                       <MdKeyboardArrowRight size={18}/>
                </li>
                <li className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between  '>
                     <div className='flex gap-6 items-center'> 
                     <AiOutlineHome size={18}/>
                       <NavLink to={'/home'}>Home</NavLink>
                     </div>
                       <MdKeyboardArrowRight size={18}/>
                </li>
                <li className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between  '>
                     <div className='flex gap-6 items-center'> 
                     <AiOutlineHome size={18}/>
                       <NavLink to={'/home'}>Home</NavLink>
                     </div>
                       <MdKeyboardArrowRight size={18}/>
                </li>
                <li className='flex cursor-pointer dash_menu_li  p-3 px-5 rounded-lg  items-center justify-between  '>
                     <div className='flex gap-6 items-center'> 
                     <AiOutlineHome size={18}/>
                       <NavLink to={'/home'}>Home</NavLink>
                     </div>
                       <MdKeyboardArrowRight size={18}/>
                </li>
            </ul>
        </nav>
        <div className=' gap-5 my-6 flex flex-col justify-center'>
        <div className="credit flex flex-col space-y-6  px-6 ">
            <button className=' w-full dash_button border px-3 py-3 rounded '>Get Credit Now!</button>
            <hr className='border-b border-gray-300'/>
        </div>
        <div className='flex flex-col mx-auto  w-fit'>
        <span className=''>Having issue? </span><a href="/contact" className=' text-code-dash_board_primary underline capitalize'>contact us</a>
        </div>
        </div>
    </div>
  )
}

export default Navbar