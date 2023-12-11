import { useState } from 'react'; 
import { FaBars, FaCode, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { HiOutlineMail } from 'react-icons/hi'; 


import { Link } from 'react-scroll'; 

const NavigationBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 className="text-3xl text-blue-300 font-signature ml-2">Hyun Seong Lee</h1>
            </div>
            {/* menu */}
            <div className="hidden md:flex ">
                <ul className="flex">
                    <li className="hover:text-blue-500 ">
                        <Link to="about" smooth={true} duration={500}>
                            About Me
                        </Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link to ="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link to ="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link to ="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 ">
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li  className="py-6 text-4xl">
                    {' '}
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About Me
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {' '}
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {' '}
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {' '}
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
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
                            href="https://devpost.com/software/whatisblockchain">
                            Devpost <FaCode size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between rounded-br-lg items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300" 
                            href="mailto:devhyun05@gmail.com" >
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
 
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar; 