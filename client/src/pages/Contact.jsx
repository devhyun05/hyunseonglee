import phoneImage from '../images/phone.png'; 
import gmailImage from '../images/gmail.png';
import linkedInImage from '../images/linkedin.png';

const Contact = () => {
    return (
        <>
            <div id="contact" style={{height: '100vh',  backgroundColor: '#f8f4fc', textAlign: 'center'}}>
                <h2 style={{color: '#3486e6', paddingTop: '5%'}}>
                    Contacts
                </h2>
                <div style={{marginTop: '3%',display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10%'}}>
                  

                    <div style={{width: '20%', height: '150px', backgroundColor: '#FFFFFF', border: '1px solid #f7f7f9', borderRadius: '30px', padding: '15px 70px 70px 30px'}}>
                        <div style={{width: '100%', marginTop: '15%', marginLeft: '5%', textAlign: 'left',  }}>
                            <div style={{display: 'flex',  alignItems:'center'}}>
                                <img src={gmailImage} style={{width: '20px', height: '20px', marginRight: '10px'}}/>
                                <p>Mail me at   
                                    <a style={{marginTop: '2px', 
                                               marginLeft: '10px', 
                                               textDecoration: 'none',
                                               textAlign: 'left'}}
                                               href="mailto: devhyun05@gmail.com">devhyun05@gmail.com                                                        
                                    </a>
                                </p> 
                            </div>
                            <div style={{marginTop: '5%', display: 'flex',  alignItems:'center'}}>
                                <img src={linkedInImage} style={{width: '20px', height: '20px', marginRight: '10px'}}/>
                                <p>Linkedin   <a style={{marginTop: '2px', 
                                                         marginLeft: '20px', 
                                                         textAlign: 'left',
                                                         textDecoration: 'none'}}
                                                         className="contact-links"  
                                                         href="https://www.linkedin.com/in/hlee291/"  target='_blank' rel="noopener noreferrer">hlee291</a></p> 
                            </div>
                            <div style={{marginTop: '5%', display: 'flex',  alignItems:'center'}}>
                                <img src={phoneImage} style={{width: '20px', height: '20px', marginRight: '10px'}}/>
                                <p>Phone   
                                    <a style={{marginTop: '2px', marginLeft: '40px', textDecoration: 'none', color: 'blue', cursor: 'pointer', textAlign: 'left'}}>
                                        437-223-7368
                                    </a>
                                </p> 
                            </div>
                          
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;