
const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-b-4 border-blue-500">About</p>
                    </div>
                    <div>

                    </div>
                    <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                        <div>
                            <p>
                                I&apos;m a software developer who is actively looking for co-op position at 2024 term.
                                I&apos;m experienced building application with MERN (MongoDB, Express, React, Node) stack. 
                                I&apos;ve developed scalable applications as perosnal and team projects                                 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 