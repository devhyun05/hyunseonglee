import myImage from '../assets/hyunseonglee.jpeg';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">About Me</p>
                </div>
                <div className="flex gap-32">
                    <div className="flex flex-col space-y-4">
                        <p>
                            Hi, I&apos;m Hyun Seong Lee, currently studying mobile application development
                            program at George Brown College. I love programming as it empowers me to bring 
                            my imaginative ideas to real product. The ability to create anything I envision is what 
                            fuels my love for this craft.
                        </p>
                        <p>
                            As a software developer, I think that teamwork and constant learning are important. A 
                            single person can create great application, but a good team of people can create 
                            outstanding application. I like the atmosphere of team is connected.
                        </p>
                        <p>
                            Software industry is evolving fast. Everyday, new technologies come out to the market. 
                            I believe that the purpose of software is to help people. It is for make people&apos;s 
                            life better. I want to become a developer who makes more people feel happy.
                        </p>
                        
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-96 h-96 rounded-full overflow-hidden">
                            <img src={myImage} alt="Hyunseong Lee" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
