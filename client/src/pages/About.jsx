import aboutPhoto from '../images/about-photo.jpeg'; 

const About = () => {
    return (
        <>
            <div id="about" style={{backgroundColor: '#EEEEEE', width: '100%', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                      
                <img src={aboutPhoto} className="aboutPhoto"/> 
                <div style={{marginLeft: '10%'}}>
                    <h3 style={{color: '#3486e6', marginBottom: '3%'}}>ABOUT ME</h3>
                    <p>
                        I&apos;m junior software developer who is actively <br/>
                        looking for co-op position at 2024 summer term.

                    </p>
                    <h3 style={{color: '#3486e6', marginTop: '5%', marginBottom: '3%'}}>Technical Proficiency</h3>
                    <p>
                        I&apos;ve experienced building application with MERN <br/>
                        (MongoDB, Express.js, React, Node.js) stack. I&apos;ve developed <br/>
                        scalable applications as personal and team projects.
                    </p>
                    <h3 style={{color: '#3486e6', marginTop: '5%', marginBottom: '3%'}}>Bridging Tech and Business</h3>
                    <p>
                        I aspire to evolve into a developer who possesses a keen <br/>
                        understanding of both business operations and their dynamic <br/>
                        changes, enabling me to make valuable contributions to the team. <br/>
                    </p>
                    <h3 style={{color: '#3486e6', marginTop: '5%', marginBottom: '3%'}}>Goal in the future</h3>
                    <p>
                        As various cutting-edge technologies such as AI and VR <br/>
                        continue to emerge, I am committed to staying abreast <br/>
                        of these changes. I am consistently dedicated to learning <br/>
                        , whether it be in business or technology, and I am <br/>
                        prepared to give my best effort. I am driven by the desire <br/>
                        to create technologies that can contribute to a better life <br/>
                        for people. By accomplishing small, achieveable goals one <br/>
                        by one, I am on a journey to become a developer who not <br/>
                        only crafts innovative solutions but also brings about <br/>
                        positive impact, aspiring to enhance the well-being of <br/>
                        individual.                
                    </p>
                </div>

            </div>
        </>
    )
}

export default About; 