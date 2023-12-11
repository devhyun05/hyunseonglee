
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'; 
const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#3B82F6] mb-5">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] mb-1">Hyun Seong Lee</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">I&apos;m a Software Developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px] mt-5 mb-3">Full Stack Developer | Backend Developer | Web Developer</p>
            <div>
                <button className="text-white group border-2 rounded-lg px-6 py-3 my-2 flex items-center">View Projects 
                    <span className="group-hover:rotate-90 duration-300">
                        <Link to="projects" smooth={true} duration={500}>
                            <HiArrowNarrowRight className="ml-3"/>
                        </Link>
                    </span>
                </button>
            </div>
            </div>

        </div>
    )
}

export default Home; 