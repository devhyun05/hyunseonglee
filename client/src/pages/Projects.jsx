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
            title: "Blog-Style Portfolio Builder",
            videoURL: "https://www.veed.io/embed/aa0c1440-9ceb-4833-8628-df474c963578",
            websiteURL: "https://www.divdev.pro",
            githubURL: "https://github.com/devhyun05/divdev",
            projectType: "Solo project, personal"
        },
        {
            id: 2,
            src: talkToGPT,
            title: "Voice-Activated ChatGPT Assistant",
            videoURL: "https://www.youtube.com/watch?v=dvpjVYKQOPE",
            websiteURL: "https://www.talktogpt.pro",
            githubURL: "https://github.com/devhyun05/TalkGPT",
            projectType: "Solo project, personal"
        },
        {
            id: 3,
            src: whatToWearToday,
            title: "Clothing Recommendation App",
            videoURL: "",
            websiteURL: "https://www.whattowear.pro",
            githubURL: "https://github.com/devhyun05/WhatToWear",
            projectType: "Solo project, personal"
        },
        {
            id: 4,
            src: whatIsBlockChain,
            title: "Blockchain Educational Website",
            videoURL: "https://www.youtube.com/watch?v=qmThY-K-ag4",
            websiteURL: "https://www.whatisblockchain.pro",
            githubURL: "https://github.com/devhyun05/what-is-block-chain",
            projectType: "Solo project, hackathon"
        },
        {
            id: 5,
            src: playpal,
            title: "Sports League Management App",
            videoURL: "",
            websiteURL: "https://playpal.netlify.app/",
            githubURL: "https://github.com/devhyun05/sourcerers-leagueMgmt",
            projectType: "Team project, college"
        },
        {
            id: 6,
            src: accuwork,
            title: "Work History Verification System",
            videoURL: "",
            websiteURL: "https://www.accuwork.pro",
            githubURL: "https://github.com/devhyun05/Accuwork",
            projectType: "Team project, hackathon"
        },

    ]
    return (
        <div name="projects" className="bg-[#0a192f] p-4 text-white pt-32">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">Projects</p>
                    <p className="py-6">All projects are unique piece of work !</p>

                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        projects.map(({ id, src, title, videoURL, websiteURL, githubURL, projectType }) => (
                            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                                <div className="pt-5 pb-2 flex justify-center font-bold">{title} </div>
                                <div className="pb-2 flex justify-center">({projectType})</div>

                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />

                                <div className="flex items-center justify-center">
                              
                                        <>
                                            {videoURL ?
                                                <>
                                                    <button className="w-1/3 px6 py-3 m-2 duration-200 hover:scale-105">
                                                        <a href={videoURL} target="_blank" rel="noreferrer">Video</a>
                                                    </button>
                                                    <button className="w-1/3 px6 py-3 m-2 duration-200 hover:scale-105">
                                                        <a href={websiteURL} target="_blank" rel="noreferrer">Website</a>
                                                    </button>
                                                    <button className="w-1/3 px6 py-3 m-2 duration-200 hover:scale-105">
                                                        <a href={githubURL} target="_blank" rel="noreferrer">Github</a>
                                                    </button>
                                                </> :
                                                <>
                                                    <button className="w-1/2 px6 py-3 m-2 duration-200 hover:scale-105">
                                                        <a href={websiteURL} target="_blank" rel="noreferrer">Website</a>
                                                    </button>
                                                    <button className="w-1/2 px6 py-3 m-2 duration-200 hover:scale-105">
                                                        <a href={githubURL} target="_blank" rel="noreferrer">Github</a>
                                                    </button>
                                                </>
                                            }
                                        </>                                    
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