
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import divdevImage from '../images/divdev.png'; 
import blogImage from '../images/blog.png'; 
import weatherImage from '../images/weather.png'; 
import weatherApp from '../images/weather-app.png'; 
import playpalImage from '../images/playpal.png'; 
import soccerBall from '../images/soccer-ball.png'; 
import accuwork from '../images/accuwork.png'; 
import accuworkWebsite from '../images/accuworkWebsite.png'; 
import piece from '../images/puzzle.png'; 

const Projects = () => {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', textAlign: 'left', marginTop: '30%'}}>
                    <h2 style={{color: '#3486e6', marginBottom: '2%'}}>PROJECTS</h2>
                    <h3>All projects are unique piece of work <img src={piece} alt="" style={{width: '20px', height: '20px'}}/></h3>
                    <div style={{width: '60%', height: '40%', display: 'flex', flexDirection: 'row', gap: '50px', marginTop: '5%'}}>
                        <img src={divdevImage}  alt="" className="project-images"/>    
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{textAlign: 'center', marginBottom: '5%'}}>
                                Divdev <img src={blogImage} alt="" style={{width: '20px', height: '20px'}}/>
                            </h3>                                           
                            <p style={{color: '#808080'}}>
                                A solo project of blog style portfolio build website for job seekers. It includes features of 
                                blog posting, profile setup, also uploading personal projects.
                            </p>
                            <p style={{fontWeight: 'bold', marginTop: '5%'}}>
                                Tech Stack: React, Node, Express, MongoDB, Material UI, S3 bucket, Skills API, Node Mailer, JWT
                            </p>
                            <div style={{display: 'flex', marginTop: '5%', justifyContent:'center', gap: '30px'}}>                         
                                    <button className="github-button">
                                        Code <FontAwesomeIcon icon={faGithub} size="2x"/> 
                                    </button>                                                
                                    <button className="demo-button">
                                        Live Demo<FontAwesomeIcon icon={faWindowMaximize} size="2x" />
                                    </button>            
                            </div>
                        </div>
                     </div>   
                     
                     <div style={{width: '60%',height: '40%', display: 'flex', flexDirection: 'row', gap: '50px'}}>
                        <img src={accuworkWebsite}  alt="" className="project-images"/>    
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{textAlign: 'center', marginBottom: '5%'}}>
                                 Accuwork<img src={accuwork} alt="" style={{marginLeft: '5px', width: '20px', height: '20px'}}/>
                            </h3>                                           
                            <p style={{color: '#808080'}}>
                                Blockhack 2023 hackathon project final product with 4 members of team. 
                                Blockchain based application which verifies  customer&apos;s work histories 
                                through the smart contract.
                            </p>
                  
                            <p style={{fontWeight: 'bold', marginTop: '5%'}}>
                                Tech Stack: React, Solidity
                            </p>
                            <div style={{display: 'flex', marginTop: '5%', justifyContent:'center', gap: '30px'}}>                         
                                    <button className="github-button">
                                        Code <FontAwesomeIcon icon={faGithub} size="2x"/> 
                                    </button>                                                
                                    <button className="demo-button">
                                        Live Demo<FontAwesomeIcon icon={faWindowMaximize} size="2x" />
                                    </button>            
                            </div>
                        </div>
                     </div>   

                     <div style={{width: '60%',height: '40%', display: 'flex', flexDirection: 'row', gap: '50px'}}>
                        <img src={weatherApp}  alt="" className="project-images"/>    
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{textAlign: 'center', marginBottom: '5%'}}>
                                WhatToWearToday <img src={weatherImage} alt="" style={{width: '20px', height: '20px'}}/>
                            </h3>                                           
                            <p style={{color: '#808080'}}>
                                A solo project of clothes recommendation website based on today&apos;s weather. It displays appropriate clothes
                                and current weather background with temperature
                            </p>
                            <p style={{fontWeight: 'bold', marginTop: '5%'}}>
                                Tech Stack: React, Node, Express, Weather API
                            </p>
                            <div style={{display: 'flex', marginTop: '5%', justifyContent:'center', gap: '30px'}}>                         
                                    <button className="github-button">
                                        Code <FontAwesomeIcon icon={faGithub} size="2x"/> 
                                    </button>                                                
                                    <button className="demo-button">
                                        Live Demo<FontAwesomeIcon icon={faWindowMaximize} size="2x" />
                                    </button>            
                            </div>
                        </div>
                     </div>   

                     <div style={{width: '60%', display: 'flex', flexDirection: 'row', gap: '50px'}}>
                        <img src={playpalImage}  alt="" className="project-images"/>    
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{textAlign: 'center', marginBottom: '5%'}}>
                                Playpal <img src={soccerBall} alt="" style={{width: '20px', height: '20px'}}/>
                            </h3>                                           
                            <p style={{color: '#808080'}}>
                                Developed Sports League Management application for local community with 5 members of team. 
                                Users can create their own team, find teammates, record their results to the website.
                            </p>
                            <p style={{fontWeight: 'bold', marginTop: '5%'}}>
                                Tech Stack: React, Node, Express, MongoDB, S3 Bucket, JWT
                            </p>
                            <div style={{display: 'flex', marginTop: '5%', justifyContent:'center', gap: '30px'}}>                         
                                    <button className="github-button">
                                        Code <FontAwesomeIcon icon={faGithub} size="2x"/> 
                                    </button>                                                
                                    <button className="demo-button">
                                        Live Demo<FontAwesomeIcon icon={faWindowMaximize} size="2x" />
                                    </button>            
                            </div>
                        </div>
                     </div>   
                            
            </div>
        </>
    )
}

export default Projects; 