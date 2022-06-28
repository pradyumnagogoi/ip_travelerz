import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerMain'>
        <div className='footerChield'>
        <div className='footerLogo'>
          <img className='logoF' src='logo.png' alt='logo' />
          <h1>travelerz</h1>
          <p>-journeys beyond the map</p>
        </div>
        <div className='footerSocial'>
          <FacebookIcon className='socialIcon' />
          <InstagramIcon className='socialIcon' />
          <TwitterIcon className='socialIcon' />
          <LinkedInIcon className='socialIcon' />
          <YouTubeIcon className='socialIcon' />
          </div>
        </div>
        <div className='topDestination'>
          <h3 className='footHead'>Top destination</h3>
          <div>Gulmarg</div>
          <div>Leh</div>
          <div>Spiti Valley</div>
          <div>Shimla</div>
          <div>Jaipur</div>
          <div>Jaisalmer</div>
          <div>Amritsar</div>
          <div>Varanasi</div>
          <div>Kaziranga</div>
          <div>Majuli</div>
          <div>Shillong</div>
          <div>Cherrapunji</div>
          <div>Goa</div>
          <div>Karela</div>
          <div>Agra</div>
          <div>Udaipur</div>
          <div>Andaman &amp; Nicobar</div>
          <div>Darjeeling</div>
         </div>
        <div className='interest'>
          <h3 className='footHead'>Travel interests</h3>
          <div>Advanture Travel</div>
          <div>Art and Culture</div>
          <div>Beaches, Coasts and Island</div>
          <div>Family Holiday</div>
          <div>Festivals</div>
          <div>Food and Drinks</div>
          <div>Honymoon and Romance</div>
          <div>Sustainable Travel</div>
          <div>Wildlife and Nature</div>
          <div>Hill Station</div>
        </div>
        <div className='aboutUs'>
          <div className='aboutFooter'>
            <h3 className='footHead'>About Us</h3>
            <div>About Travelerz</div>
            <div>Contact Us</div>
            <div>Privacy Policy</div>
            <div>Work with Us</div>
          </div>
          <Link to='/contact'><button className='footerBtn'>Get in touch</button></Link>
        </div>
      </div>
      <div className='footerCopyright'>
        <div className='copyrightLogo'>
          <img src='logo-footer.png' alt='logo' />
          <h1>travelerz</h1>
        </div>
        <div className='copyRight'>
          &copy;2022 Travelerz. All right reserved. No part of this site may be reproduced without permission.
        </div>
      </div>
    </div>
  )
}

export default Footer