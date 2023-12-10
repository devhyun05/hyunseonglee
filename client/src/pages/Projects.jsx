import divdev from '../assets/projects/divdev.png'; 
import talkToGPT from '../assets/projects/talktogpt.png';
import whatToWearToday from '../assets/projects/whattowear.png';
import whatIsBlockChain from '../assets/projects/whatisblockchain.png';
import playpal from '../assets/projects/playpal.png';
import accuwork from '../assets/projects/accuworkWebsite.png';
import { Link } from 'react-router-dom'; 

const Projects = () => {
    const projects = [
        {
            id: 1, 
            src: divdev,
            title: "Blog-Style Portfolio Builder",
            websiteURL: "https://www.divdev.pro",
            githubURL: "https://github.com/devhyun05/divdev"
        },
        {
            id: 2, 
            src: talkToGPT,
            title: "Voice-Activated ChatGPT Assistant",
            websiteURL: "https://www.talktogpt.pro",
            githubURL: ""
        },
        {
            id: 3, 
            src: whatToWearToday,
            title: "Clothing Recommendation App",
            websiteURL: "https://www.whattowear.pro",
            githubURL: "https://github.com/devhyun05/WhatToWear"
        },
        {
            id: 4, 
            src: whatIsBlockChain,
            title: "Blockchain Educational Website",
            websiteURL: "https://www.whatisblockchain.pro",
            githubURL: "https://github.com/devhyun05/what-is-block-chain"
        },
        {
            id: 5, 
            src: playpal,
            title: "Sports League Management App",
            websiteURL: "https://playpal.netlify.app/",
            githubURL: "https://github.com/devhyun05/sourcerers-leagueMgmt"
        },
        {
            id: 6, 
            src: accuwork,
            title: "Work History Verification System",
            websiteURL: "https://www.divdev.pro",
            githubURL: "https://github.com/devhyun05/Accuwork"
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
                    projects.map(({id, src, title, websiteURL, githubURL}) => (
                        <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                            <div className="p-5 flex justify-center font-bold">{title}</div>
                   
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
               
                            <div className="flex items-center justify-center">
                                <button className="w-1/3 px6 py-3 m-2 duration-200 hover:scale-105"><Link to={websiteURL}>Video</Link></button>
                                <button className="w-1/3 px6 py-3 m-2 duration-200 hover:scale-105"><Link to={websiteURL}>Website</Link></button>
                                <button className="w-1/3 px6 py-3 m-2 duration-200 hover:scale-105"><Link to={githubURL}>Github</Link></button>
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