import React from 'react'
import logo from '../images/logo.png'
import About from './About'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [Toggle, setToggle] = useState(true)
    const Navitem = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Skills",
        },
        {
            id: 4,
            text: "Projects",
        },
        {
            id: 5,
            text: "Contact",
        },
    ]
 
    return (

        <nav className='bg-bgnavcolor h-14 w-full container mx-auto text-white flex gap-3 justify-between items-center sticky top-0'>
            <img  src={logo} width={60} alt="img" className='mx-5 rounded-lg navbar' />
            {
            
            Toggle?<RxHamburgerMenu onClick={(e)=>{setToggle(!Toggle)}} className='md:hidden mr-3 text-xl' />:<IoMdClose onClick={(e)=>{setToggle(!Toggle)}}  className='md:hidden mr-3 text-xl' />
            
            }
                    <div className={`bg-slate-600 flex justify-center items-center fixed top-14 opacity-90 left-0 right-0 ${Toggle?"hidden":"block"} md:hidden h-[50vh]`}><ul className='md:flex flex flex-col justify-center items-center gap-2 md:gap-7 mx-20'>
                {Navitem.map(nav => {
                    return <li  className='text-white text-xl cursor-pointer'  key={nav.id}>
                        <Link activeClass="active"
                            to={nav.text}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={(e)=>{setToggle(true)}} 
                        >
                            {nav.text}
                        </Link>
                    </li>
                })}
            </ul></div>

            <ul className='md:flex gap-7 mx-20 hidden'>
                {Navitem.map(nav => {
                    return <li  className='text-white hidden md:block cursor-pointer' key={nav.id}>
                        <Link activeClass="active"
                            to={nav.text}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        
                        >
                            {nav.text}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>

    )
}

export default Navbar