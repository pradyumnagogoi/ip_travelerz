import React from 'react';
import '../Post/Post.css';
import { Avatar } from '@mui/material';


function Post({username, location, caption, imageUrl}) {
  return (
    <div className='post'>
       <div className='post_header'>
            <Avatar 
                className='post_avater'
                alt='Pradyumna'
                src='/static/images/avatar/1.jpg'
            />
            <div>
                <h3 className='post_user'>{username}</h3>
                <p className='post_location'>{location}</p>
            </div>
       </div>
       <img className='post_image' src={imageUrl} alt='img' />
       <p className='post_text'><strong>{username}</strong>{caption}</p>
    </div>
  )
}

export default Post