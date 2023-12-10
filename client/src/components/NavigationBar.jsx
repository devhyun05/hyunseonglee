import { useState } from 'react'; 
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { HiOutlineMail } from 'react-icons/hi'; 
import {BsFillPersonLinesFill} from 'react-icons/bs'; 

const NavigationBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>

            </div>
            {/* menu */}
            <div className="hidden md:flex ">
                <ul className="flex">
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 ">
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
                <ul>
                    <li className="w-[160px] h-[60px] flex rounded-tr-lg justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                            href="https://www.linkedin.com/in/hlee291/" target="_blank" rel="noreferrer">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                            href="https://github.com/devhyun05" target="_blank" rel="noreferrer">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                            href="/" >
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex rounded-br-lg justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                            href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar; 