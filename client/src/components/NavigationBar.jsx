import codeImage from '../images/coding.png'; 
import { Link } from 'react-scroll'; 

const NavigationBar = () => {

    return (
        <> 
            <div style={{position: 'fixed', 
                         top: '0', 
                         width: '90%', 
                         backgroundColor: 'white',
                         display: 'flex', 
                         flexDirection: 'row', 
                         alignItems: 'center', 
                         padding: '3% 7% 1% 7%', 
                         borderBottom: '1px solid #cecece', }}>
                <h3 style={{display: 'flex', gap: '10px'}}>
              
                    HyunSeongLee
                    <img src={codeImage} alt="" style={{width: '28px'}}/>
                </h3>
                <nav style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
                    <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '30px'}}>                        
                        <li><Link to="home"  spy={true} smooth={true} offset={-70}  duration={500} className="nav-links" activeClass="active-link">Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-links" activeClass="active-link">About</Link></li>
                        <li><Link to="projects"spy={true} smooth={true} offset={-70} duration={500} className="nav-links" activeClass="active-link">Projects</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-links" activeClass="active-link">Contact</Link></li>
                    </ul>
                </nav>
                
            </div>
        </> 
    )
}

export default NavigationBar; 