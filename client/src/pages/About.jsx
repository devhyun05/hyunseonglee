import myImage from '../assets/hyunseonglee.jpeg';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-500">About Me</p>
                </div>
                <div className="flex flex-col space-y-4 lg:flex-row lg:gap-32">
                    <div className="lg:w-1/2 space-y-4">
                        <p>
                            Hi, I&apos;m Hyun Seong Lee, currently studying mobile application development
                            program at George Brown College. I love programming as it empowers me to bring 
                            my imaginative ideas to real product. The ability to create anything I envision is what 
                            fuels my love for this craft.
                        </p>
                        <p>
                            As a software developer, I believe that and continous learning are crucial. 
                            While an individual can create a great application, a cohesive team of people 
                            can produce outstanding results. I like the collaborative atmosphere where the
                            team is connected
                        </p>
                        <p>
                            The software industry is evolving rapidly, with new technologies emerging every day. I 
                            believe that the purpose of software is to enhance people&apos;s lives and make them better. 
                            I aspire to become a developer who brings happiness to more people.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
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
