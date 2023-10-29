import aboutPhoto from '../images/about-photo.jpeg'; 

const About = () => {
    return (
        <>
            <div style={{backgroundColor: '#f5f9fe', width: '100%', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                      
                <img src={aboutPhoto} className="aboutPhoto"/> 
                <div style={{marginLeft: '10%'}}>
                    <h3 style={{color: '#3486e6', marginBottom: '3%'}}>ABOUT ME</h3>
                    <p>
                        I&apos;m junior full stack developer who is actively <br/>
                        looking for co-op position at 2024 summer term.

                    </p>
                    <h3 style={{color: '#3486e6', marginTop: '5%', marginBottom: '3%'}}>Technical Proficiency</h3>
                    <p>
                        I am confidence with building application with MERN <br/>
                        (MongoDB, Express.js, React, Node.js) stack. I&apos;ve developed <br/>
                        scalable applications as personal and team projects.
                    </p>
                    <h3 style={{color: '#3486e6', marginTop: '5%', marginBottom: '3%'}}>Bridging Tech and Business</h3>
                    <p>
                        I want to become a developer who understands the <br/> business 
                        and its changes clearly to contribute to the team. <br/>
                        I recently got two certificates which are git associate  <br/>
                        and AWS cloud practitioner. I believe that these knowledge <br/>
                        will increase my ability to adapt dynamic industry.
                    </p>
                    <h3 style={{color: '#3486e6', marginTop: '5%', marginBottom: '3     $%'}}>Vision in the future</h3>
                    <p>
                        I&apos;m a developer who always trying to find the better solution. <br/>
                        If the low code platform is more suitable for the team <br/>
                        project, I should use it. I will constantly learning not <br/>
                        only my main languages, also the new coming software skills. <br/>
                        
                    </p>
                </div>

            </div>
        </>
    )
}

export default About; 