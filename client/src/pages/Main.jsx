import myPhoto from '../images/hyunseonglee.jpeg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import htmlIcon from '../images/html5.png'; 
import cssIcon from '../images/css3.png';
import jsIcon from '../images/js.png'; 
import reactIcon from '../images/react.png';
import nodeIcon from '../images/nodejs.png'; 
import expressIcon from '../images/express.png'; 
import mongoDB from '../images/mongodb.png'; 
// import gitLabCertificate from '../images/gitlab-certificate.png';
// import awsCertificate from '../images/aws-certificate.jpeg'; 

const Main = () => {
    return (
        <> 
            <div style={{display: 'flex', flexDirection: 'row', gap: '100px', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <div>
                    <h1 style={{fontSize:'50px'}}>Full Stack <br/>Developer</h1>
                    <p style={{marginTop: '5%'}}>
                        Hi, I&apos;m Hyun Seong Lee. A passionate <br/> Full Stack Developer in Toronto, Ontario 
                    </p>
                    <div style={{marginTop: '5%'}}>
                        <a className="github-icon" href="https://github.com/devhyun05" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x"/> 
                        </a>
                        <a className="linkedin-icon" href="https://www.linkedin.com/in/hlee291/" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                    <div style={{marginTop:'5%'}}>
                        <h2>Tech Stack</h2>
                        <ul style={{display: 'flex', marginTop: '5%', gap: '10px', alignItems: 'center'}}>
                            <li><img src={htmlIcon} className="tech-stack-icons"/></li>
                            <li><img src={cssIcon} className="tech-stack-icons"/></li>
                            <li><img src={jsIcon} className="tech-stack-icons"/></li>
                            <li><img src={reactIcon} className="tech-stack-icons"/></li>
                            <li><img src={nodeIcon} className="tech-stack-icons"/></li>
                            <li><img src={expressIcon} className="express-icon"/></li>
                            <li><img src={mongoDB} className="mongodb-icon"/></li>
                        </ul>
  
                    </div>

                </div>
                <div>
                    <img src={myPhoto} alt="" className="myPhoto"/>          
                </div>
            </div>
        </>
    )
}

export default Main; 