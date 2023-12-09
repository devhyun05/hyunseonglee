import divdev from '../assets/projects/divdev.png'; 
import talkToGPT from '../assets/projects/talktogpt.png';
import whatToWearToday from '../assets/projects/whattowear.png';
import whatIsBlockChain from '../assets/projects/whatisblockchain.png';
import playpal from '../assets/projects/playpal.png';
import accuwork from '../assets/projects/accuworkWebsite.png';

const Projects = () => {
    const projects = [
        {
            id: 1, 
            src: divdev 
        },
        {
            id: 2, 
            src: talkToGPT
        },
        {
            id: 3, 
            src: whatToWearToday 
        },
        {
            id: 4, 
            src: whatIsBlockChain 
        },
        {
            id: 5, 
            src: playpal 
        },
        {
            id: 6, 
            src: accuwork
        },

    ]
    return (
        <div name="portfolio" className="w-full h-screen bg-[#0a192f] p-4 text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">Projects</p>
                    <p className="py-6">Demo is video recording of the project, deployed website url is in the code (github)</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    projects.map(({id, src}) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                <button className="w-1/2 px6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        
    )
}

export default Projects; 