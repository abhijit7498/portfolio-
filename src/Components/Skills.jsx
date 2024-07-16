import React from 'react'
import htmlimg from '../images/htmlimg.png'
import cssimg from '../images/cssimg.png'
import javascriptimg from '../images/javaScriptimg.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const Skills = () => {
    return (
        <>
       
        <hr  name="Skills" className='text-black mt-10' />

        <div className='w-full container mt-16 md:mt-28'>
        <h2 className='text-2xl font-medium ml-10 mb-3'><Typewriter
                  words={['Skills']}
                  loop={10}
                  cursor
                  cursorStyle='_'
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /></h2>
            <div className='w-full flex md:flex-row flex-col items-center md:items-start justify-evenly'>

                <div className=' w-[90%] md:w-[30%] hover:scale-105 bg-slate-200 my-4 rounded-3xl shadow-2xl shadow-slate-700'>
                    <h3 className='text-center text-2xl'>Front-End</h3>
                    <div className='  flex flex-wrap justify-center w-full gap-4 my-4'>
                        <div className='flex flex-col justify-center items-center'><p>HTML</p>
                            {/* <img src={htmlimg} className='h-[130px] w-[130px] border rounded-full' alt="" /> */}
                            <FaHtml5 className='text-8xl text-orange-600' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>CSS</p>
                            {/* <img src={cssimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <FaCss3Alt className='text-8xl text-blue-700' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>JAVA SCRIPT</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <TbBrandJavascript className='text-javas text-yellow-600' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>REACT</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <FaReact className=' text-[5.8rem] text-blue-600' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>NEXT JS</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}

                            <RiNextjsFill className='text-javas' />


                        </div>
                        <div className='flex flex-col justify-center items-center'><p>TAILWIND</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <RiTailwindCssFill className='text-8xl text-violet-600' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>BOOTSTRAP</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <FaBootstrap className='text-8xl text-purple-700' />

                        </div>
                    </div>
                </div>
                <div className='w-[90%] md:w-[30%] hover:scale-105 bg-slate-200 my-4 rounded-3xl shadow-2xl shadow-slate-700'><h3 className='text-center text-2xl'>Back End</h3>
                    <div className='  flex flex-wrap justify-center items-center w-full gap-4 my-4'>
                        <div className='flex flex-col justify-center items-center'><p>NODE JS</p>
                            {/* <img src={htmlimg} className='h-[130px] w-[130px] border rounded-full' alt="" /> */}
                            <FaNode className='text-8xl text-green-700' />

                        </div>
                        <div className='flex flex-col justify-center items-center pb-6'><p>EXPRESS JS</p>
                            {/* <img src={cssimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <SiExpress className='text-7xl' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>JAVA</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <FaJava className='text-javas text-red-600' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>PHP</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <FaPhp className=' text-8xl text-red-500' />

                        </div>

                        <div className='flex flex-col justify-center items-center'><p>MY SQL</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <SiMysql className='text-8xl text-red-500' />

                        </div>
                        <div className='flex flex-col justify-center items-center'><p>BOOTSTRAP</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <BiLogoMongodb className='text-8xl text-green-700' />

                        </div>
                    </div>
                </div>
                <div className='w-[90%] md:w-[30%] h-[43.6vh]  hover:scale-105 bg-slate-200 my-4 rounded-3xl shadow-2xl shadow-slate-700'>
                    <h3 className='text-center text-2xl'>Tools & Technologies</h3>
                    <div className='flex  justify-evenly w-full my-4'>
                        <div className='flex flex-col justify-center items-center'><p>GIT</p>
                            {/* <img src={cssimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <FaGitAlt className='text-8xl text-red-500' />
                        </div>
                        <div className='flex flex-col justify-center items-center'><p>GIT HUB</p>
                            {/* <img src={htmlimg} className='h-[130px] w-[130px] border rounded-full' alt="" /> */}
                            <FaGithubSquare className='text-8xl text-slate-800' />
                        </div>

                        <div className='flex flex-col justify-center items-center gap-1'><p>FIGMA</p>
                            {/* <img src={javascriptimg} className='h-[100px] w-[100px] border' alt="" /> */}
                            <FaFigma className='text-8xl text-pink-500' />
                        </div>


                    </div>
                </div>

            </div >
            <div />
        </div >
        </>
    )
}

export default Skills