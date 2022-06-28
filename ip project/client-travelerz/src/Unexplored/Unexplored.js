import React, { useState } from 'react';
import '../Unexplored/Unexplored.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Post from '../Post/Post';


function Unexplored() {
  const [posts] = useState([    /*setState is not defined */
    {
      username: "Pradyumna", 
      location: "Naharkatia",
      caption: "Wow! this is cool", 
      imageUrl: "https://images.pexels.com/photos/5007728/pexels-photo-5007728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      username: "Prasanjit", 
      location: "Tingrai",
      caption: "Wow", 
      imageUrl: "https://images.pexels.com/photos/5007728/pexels-photo-5007728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]);

  

  return (
    <div className='unexplored'>
      <div className='unExHead'>
        <h1>Limit your travel,<br/>not your adventures.</h1><br/>
        <p>- Explore your surroundings and share your great experiences with us.</p>
      </div>
      <div className='unExBody'>
        <div>
        {
          posts.map(post => (
            <Post username={post.username} location={post.location} caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }
        </div>
        <div className='auth'>
          <div className='logIn'>
            <AccountCircleIcon />
            <input className='inputClass' type='text' placeholder='Username or email' />
          </div>
          <div className='logIn'>
            <KeyIcon />
            <input className='inputClass' type='password' placeholder='Password' />
          </div>
          <div className='logDetails'>
            <label class="log_container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Remember me
            </label>
            <button className='logBtn'>LOGIN</button>
            <div className='signUp'>Register me</div>
            <div className='forgotPass'>Forgot password?</div>
          </div>
          <h1>or</h1>
          <div className='googleLogIn'>
            <div className='googleLogo'><GoogleIcon /></div>
            <div className='loginBox'>LOGIN WITH GOOGLE</div>
          </div>
          <div className='fbLogIn'>
            <div className='fbLogo'><FacebookIcon /></div>
            <div className='fbLoginBox'>LOGIN WITH FACEBOOK</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Unexplored

