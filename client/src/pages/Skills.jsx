import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'; 
import reactImage from '../assets/react.png'; 
import nodeJs from '../assets/node.png'
import expressJs from '../assets/express.png';
import mongoDB from '../assets/mongo.png';
import aws from '../assets/aws.png';
import github from '../assets/github.png'; 

const Skills = () => {
    const techs = [
        {
            id: 1, 
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2, 
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3, 
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4, 
            src: reactImage,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5, 
            src: nodeJs,
            title: "Node",
            style: "shadow-green-500"
        },
        {
            id: 6, 
            src: expressJs,
            title: "Express",
            style: "shadow-yellow-300"
        },
        {
            id: 7, 
            src: mongoDB,
            title: "MongoDB",
            style: "shadow-green-500"
        },
        {
            id: 8, 
            src: aws,
            title: "AWS",
            style: "shadow-white"
        },
        {
            id: 9, 
            src: github,
            title: "Github",
            style: "shadow-gray-400"
        },
    ]

    return (
        <div name="skills" className="bg-[#0a192f] p-4 pb-32 text-white pt-32">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">Skills</p>
                    <p className="py-6">These are the technologies I&apos;ve worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        techs.map(({id, src, title, style}) =>(
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto"/>
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }
 
                </div>
            </div>
        </div>
    )
}

export default Skills; 