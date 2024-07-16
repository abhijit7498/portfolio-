import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <>
<hr  name="About" className='text-black  md:mt-14' />
    <div  className='w-full container mx-auto md:mt-28 mt-4'>

 <h2 className='text-2xl font-medium ml-10'><Typewriter
                  words={['About Me']}
                  loop={10}
                  cursor
                  cursorStyle='_'
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /></h2>
 <div className='w-full h-full flex items-center justify-center gap-3 md:my-4 my-6'>

 <div className='w-[45%] h-[45vh]  bg-violet-600 rounded-tr-3xl rounded-bl-3xl  text-white  p-4 shadow-xl shadow-black'><p className='text-xl'>My Journey</p> <div className='overflow-auto h-[85%] md:h-full'><ul className="list-disc py-3 pl-5 space-y-2">
  <li className="text-[0.9rem] md:text-lg">Hello I'm Abhijit Maske, a passionate and dedicated Full Stack Web Developer. With a strong foundation in both front-end and back-end technologies, I specialize in creating seamless, dynamic, and user-friendly web applications.</li>
  <li className="text-[0.9rem] md:text-lg"> My journey in web development began with a curiosity for how websites work and a desire to create my own. Over the years, I have honed my skills through various projects, both personal and professional, always striving to stay updated with the latest trends and technologies in the industry.</li>
</ul> </div></div>
 <div className='w-[45%] h-[45vh] bg-violet-600 rounded-tr-3xl text-white rounded-bl-3xl p-4   shadow-xl shadow-black'>
 <p className='text-xl'>What I Do</p>
 <div className='overflow-auto md:h-full h-[85%]'>
 <ul className="list-disc py-3 pl-5 space-y-2">
  <li className=" text-[0.9rem] md:text-lg">Web Development: Crafting beautiful and functional websites from concept to deployment.
  </li>
  <li className="text-[0.9rem] md:text-lg">Web Applications: Building dynamic and scalable web applications tailored to client needs.
  </li>
  <li className="text-[0.9rem] md:text-lg">API Development: Creating robust APIs for seamless integration and data exchange.
  </li>
  <li className='text-[0.9rem] md:text-lg'>
  UI/UX Design: Ensuring an intuitive and engaging user experience.

  </li>
</ul>
</div>
</div>
 </div>
      



  </div>
  </>
  )
}

export default About