import React from 'react';
import '../Contect/Contect.css';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contect() {
  return (
    <div className='contact'>
      <div className='contactHead'>
        <h1 className='heading'>Let's have a talk</h1>
        <img className='headBg' src='https://brandaffair.ro/assets/ea8fd523/images/slidesBg/contactSun.png' alt='img' />
        <img className='headingImg' src='https://brandaffair.ro/assets/ea8fd523/images/slidesBg/contactAnimal2.png' alt='img' />
      </div>

      <div className='contactBody'>
        <div className='contactMap'>
          <iframe title='map' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109266.92936196823!2d94.91964193435!3d27.465655451977526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3740980c92b56083%3A0x98ee64d7d61a64e9!2sChowkidingee%20Clock%20Tower%2C%20Chowkidingee%2C%20Dibrugarh%2C%20Assam%20786001!5e0!3m2!1sen!2sin!4v1654166343278!5m2!1sen!2sin" width="100%" height="100%" />
        </div>
        <div className="meetUs">
            <div className="infoWrap">
              <div className="title">Meet us</div>
              <div className='contactWrap'>
                <PhoneIcon className='iconWrap' />
                <a href="tel:+91 9101096266">+91 9101096266</a>
              </div>
              <div className='contactWrap'>
                <AlternateEmailIcon className='iconWrap' />
                <a href="mailto:contact@travelerz07gmail.com">contact@travelerz07gmail.com</a>
              </div>
              <div className='contactWrap'>
                <LocationOnIcon className='iconWrap' />
                <a href="https://goo.gl/maps/dv9DH1ajm3fJXDrM6">Dibrugarh, As, chowkidingee clock tower</a>
              </div>
            </div>
        </div>
        <div className='pitchUs'>
          <form class="infoWrap" id="sendContact">
            <div class="title">Pitch us</div>
            <p>
              hello,<br /><br />
              my name is <input className='pitchInput' type='text' placeholder='your name' required /> 
              , my mobile number is <input className='pitchInput' type='text' placeholder='your number' /> and my e-mail address is <input className='pitchInput' type='email' placeholder='your e-mail' required /> 
              and my message to you is " <input type='text' className='pitchInput' placeholder='your message' required /> ".
            </p>
            <button type="submit" class="gradButton">send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contect