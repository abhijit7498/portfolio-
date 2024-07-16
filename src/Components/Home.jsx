import heroimg from '../images/heroimg.png'
import mongoimg from '../images/mongoimg.webp'
import expressimg from '../images/expressjs.png'
import nodeimg from '../images/nodejs.png'
import reactimg from '../images/reactimg.png'
import devolopmentimg from '../images/development.png'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div name="Home" className='w-full container mx-auto bg-infodiv'>
        <div className="bg-cover bg-center h-[50vh] flex items-center justify-around shadow-2xl shadow-blue-200" style={{ backgroundImage: `url(${heroimg})` }}>

          <div className='w-[51%] flex justify-evenly items-center' >
            <div className='flex flex-col gap-2 mx-7 md:mx-0'>
              <p className='text-h1color text-lg'>Hello It's Me</p>
              <span className='font-bold text-2xl text-orange-700'>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Abhijit Maske']}
                  loop={10}
                  cursor
                  cursorStyle='_'
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
                />
              </span>
              <p className='text-black text-xl'>And I'm a Full Stack<span className='text-violet-700'> Web Developer</span>
              </p>
              <div className='flex gap-3'>
                <a target='_blank' href="https://github.com/abhijit7498"><FaGithub className='text-3xl' /></a> <a target='_blank' href="https://www.linkedin.com/in/abhijit-maske-58751925a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FqmTEFMaQaG2ix9F7ZvleQ%3D%3D"><FaLinkedin className='text-3xl' /></a> <a target='_blank' href="https://www.instagram.com/abhi__maske/#"><FaInstagramSquare className='text-3xl' /></a>
                <FaTelegram className='text-3xl' /><FaTwitterSquare className='text-3xl' />





              </div>
              {/* <p className=' shadow-2xl p-2 shadow-black'>Welcome to my portfolio! I'm a passionate <br/> web developerdedicated to creating responsive,<br/> user-friendly websites</p> */}
            </div>

          </div>
          <div className='w-[49%] p-2 md:p-0 flex items-center justify-center'>

            <img src={devolopmentimg} width={350} alt="" />
          </div>
        </div>
        <div className='text-center text-2xl h:[43vh] md:h-[35vh]'>
  <p>Currently Working on</p>
  <div className='w-full flex flex-wrap justify-evenly items-center my-10'>
    <div className=' flex justify-evenly items-center  w-1/2 md:w-1/4 mb-4 md:mb-0'>
      <img className="h-[104px] w-[104px] md:h-[170px] md:w-[170px] border rounded-full shadow-xl shadow-slate-700" src={mongoimg} alt="MongoDB" />
    </div>
    <div className=' flex justify-evenly items-center  w-1/2  md:w-1/4 mb-4 md:mb-0'>
      <img className="h-[104px] w-[104px] md:h-[170px] md:w-[170px] border rounded-full shadow-xl shadow-slate-700" src={expressimg} alt="Express.js" />
    </div>
    <div className=' flex justify-evenly items-center  w-1/2 md:w-1/4'>
      <img className="h-[104px] w-[104px] md:h-[170px] md:w-[170px] border rounded-full shadow-xl shadow-slate-700" src={reactimg} alt="React.js" />
    </div>
    <div className=' flex justify-evenly items-center  w-1/2 md:w-1/4'>
      <img className="h-[104px] w-[104px] md:h-[170px] md:w-[170px] border rounded-full shadow-xl shadow-slate-700" src={nodeimg} alt="Node.js" />
    </div>
  </div>
</div>

      </div>
    </>
  )
}
export default Home
