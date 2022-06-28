import React from 'react';
import '../LetsGo/LetsGo.css';
import { Link } from 'react-router-dom';

function LetsGo() {
  return (
    <div className='letsGo'>
        <img className='goImg' src='https://livedemo00.template-help.com/wt_51647/images/parallax-1-1920x850.jpg' alt='img' />
        <div className='goText'>
            <h1>Get out and stretch your imagination</h1>
            <p>limit your travel, not your advantures.</p>
            <p>plan a different kind of getaway to uncover the hidden gem near you.</p>
            <Link to='/unexplored'><button className='goBtn'>Explore new</button></Link>
        </div>
    </div>
  )
}

export default LetsGo