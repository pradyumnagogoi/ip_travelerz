import React, { useState } from 'react';
import '../Home/Home.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LetsGo from '../BodyComponents/LetsGo/LetsGo';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


function Home() {
    const[aboutUs, setAboutUs] = useState(true);
    const[whyUs, setWhyUs] = useState(false);
    const[ourMission, setOurMission] = useState(false);
   
  return (
    <div className='home'>
        <div>
            <video className='videoNav' autoPlay loop muted> 
                <source src="goa.mp4" type="video/mp4" />
            </video>
        </div>  
        <div className='homeCollection'>
            <div className='homeLocation'>
                <div className='container'>
                    <img className='imgCollection' src='https://images.pexels.com/photos/3286817/pexels-photo-3286817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' />
                    <div className='overlay'>Explore dunes</div>
                </div>
                <div className='container'>
                    <img className='imgCollection' src='https://images.pexels.com/photos/1835712/pexels-photo-1835712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' />
                    <div className='overlay'>Explore beaches</div>
                </div>
                <div className='container'>
                    <img className='imgCollection' src='https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' />
                    <div className='overlay'>Explore hill-stations</div>
                </div>
            </div>
            <div className='homeLink'>
                <Link to='/destination'>Other Tours</Link>
                <ArrowRightAltIcon />    
            </div>    
        </div>
        <div className='discoverSection'>
            <div>
                <img className='imgExtra' src='https://livedemo00.template-help.com/wt_51647/images/index-3-556x382.jpg' alt='img' />
            </div>
            <div className='discoverMenu'>
                <h1 className='discoverHead'>Discover new horizons</h1>
                <div className='discoverSubMenu'>
                    <div className='SubNav' onClick={()=>setAboutUs(!aboutUs)}>About us</div>
                    <div className='SubNav' onClick={()=>setWhyUs(!whyUs)}>why choose us</div>
                    <div className='SubNav' onClick={()=>setOurMission(!ourMission)}>our mission</div>
                </div>
                {aboutUs ? <p>Travelerz is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.</p>:null
                }
                {whyUs ? <p>We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.</p>:null
                }
                {ourMission ? <p>Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.</p>:null
                }
                <Link to='/contact'><button className='discoverBtn'>Get in Touch</button></Link>
            </div>
        </div>
        <LetsGo />
        <Footer />
    </div>
  )
}

export default Home