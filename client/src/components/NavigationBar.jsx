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
                <ul style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '30px'}}>                        
                    <li><Link to="home" smooth={true} duration={500} className="nav-links">Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className="nav-links">About</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="nav-links">Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="nav-links">Contact</Link></li>
                </ul>
                
            </div>
        </> 
    )
}

export default NavigationBar; 