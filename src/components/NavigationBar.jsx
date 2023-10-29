import codeImage from '../images/coding.png'; 

const NavigationBar = () => {

    return (
        <> 
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '3% 7% 1% 7%', borderBottom: '1px solid #cecece', }}>
                <h3 style={{display: 'flex', gap: '10px'}}>
              
                    HyunSeongLee
                    <img src={codeImage} alt="" style={{width: '28px'}}/>
                </h3>
                <ul style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '30px'}}>                        
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                
            </div>
        </> 
    )
}

export default NavigationBar; 