import React from 'react'
import passopimg from '../images/passopimg.png'
import todoappimg from'../images/todoappimg.png'
import { Typewriter } from 'react-simple-typewriter'

const Projects = () => {
    return (
        <>
        <hr  name="Projects" className='text-black mt-10' />

        <div className='mb-12 mt-2 md:mt-28'>
<h2 className='text-2xl font-medium ml-10 mb-3'><Typewriter
                  words={['Projects']}
                  loop={10}
                  cursor
                  cursorStyle='_'
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /></h2>
        <div className=' h-[90%] md:width-full flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around mt-6'>



            <div className="max-w-sm h-[60vh] w-[90%] md:w-full shadow-xl shadow-blue-300 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg" src={passopimg} alt="" />

                <div className="p-5 " title='Scroll Dawn to read More And Git Repozatory '>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PassOP -Password Manager
                    </h5>
                    <div className='overflow-auto h-[20vh]'>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description: PassOP is a secure and user-friendly password manager built with React. It enables users to store, edit, and manage their passwords efficiently with MongoDB for backend data storage. The project features a clean UI, easy-to-use forms for adding passwords, and functionalities for viewing, copying, and deleting stored passwords..</p>
                        <h4 className='text-white'>Technologies Used:

                        </h4>
                        <ul className=' text-gray-700 dark:text-gray-400 list-disc py-3 pl-5 space-y-2'>
                            <li>React</li>
                            <li>UUID for unique ID generation</li>
                            <li>React Icons for intuitive UI elements
                            </li>
                            <li>React Toastify for user notifications
                            </li>
                            <li>MongoDB for backend storage and data persistence
                            </li>
                        </ul>

                        <h4 className='text-white'>Features:
                        </h4>
                        <ul className=' text-gray-700 dark:text-gray-400 list-disc py-3 pl-5 space-y-2'>
                            <li>Add, edit, and delete passwords
                            </li>
                            <li>Toggle password visibility
                            </li>
                            <li>Copy credentials to clipboard with a single click

                            </li>
                            <li>Responsive design for seamless use across devices

                            </li>
                            <li>Backend integration with MongoDB for persistent data storage

                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="max-w-sm h-[60vh] w-[90%] md:w-full shadow-xl shadow-blue-300 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg h-[28vh] object-fill"  src={todoappimg} alt="" />

                <div className="p-5 " title='Scroll Dawn to read More And Git Repozatory '>

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Todo List Manager

                    </h5>
                    <div className='overflow-auto h-[20vh]'>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description:The Todo List Manager is a simple and efficient application built with React for managing daily tasks. Users can add, edit, delete, and mark tasks as completed. The application leverages local storage to persist tasks, ensuring data is retained even after the browser is closed.

                        </p>
                        <h4 className='text-white'>Technologies Used:

                        </h4>
                        <ul className=' text-gray-700 dark:text-gray-400 list-disc py-3 pl-5 space-y-2'>
                            <li>React</li>
                            <li>UUID for unique ID generation</li>
                            <li>React Icons for intuitive UI elements
                            </li>

                        </ul>

                        <h4 className='text-white'>Features:
                        </h4>
                        <ul className=' text-gray-700 dark:text-gray-400 list-disc py-3 pl-5 space-y-2'>
                            <li>Add, edit, and delete todos
                            </li>
                            <li>Mark todos as completed

                            </li>
                            <li>Toggle to show only marked todos


                            </li>
                            <li>Persist tasks using local storage


                            </li>
                            <li>Responsive design for seamless use across devices


                            </li>
                        </ul>

                    </div>
                </div>
                <div />
            </div>
</div>
</div></>
            )
}

            export default Projects