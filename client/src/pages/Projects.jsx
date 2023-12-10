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
            src: divdev,
            title: "Blog-Style Portfolio Builder"
        },
        {
            id: 2, 
            src: talkToGPT,
            title: "Voice-Activated ChatGPT Assistant"
        },
        {
            id: 3, 
            src: whatToWearToday,
            title: "Clothing Recommendation App"
        },
        {
            id: 4, 
            src: whatIsBlockChain,
            title: "Blockchain Educational Website"
        },
        {
            id: 5, 
            src: playpal,
            title: "Sports League Management App"
        },
        {
            id: 6, 
            src: accuwork,
            title: "Work History Verification System"
        },

    ]
    return (
        <div name="projects" className="bg-[#0a192f] p-4 text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">Projects</p>
                    <p className="py-6">All projects are unique piece of work</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    projects.map(({id, src, title}) => (
                        <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                            <div className="p-5 flex justify-center font-bold">{title}</div>
                   
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
               
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px6 py-3 m-2 duration-200 hover:scale-105">Website</button>
                                <button className="w-1/2 px6 py-3 m-2 duration-200 hover:scale-105">Github</button>
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