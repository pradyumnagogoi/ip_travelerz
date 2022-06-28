import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Destination from './Destination/Destination';
import Unexplored from './Unexplored/Unexplored';
import Contact from './Contect/Contect';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MapIcon from '@mui/icons-material/Map';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';



function App() {
  return (
    <div className="App">
      <div className='header'>
            <div className='logo'>
                <img src='logo.png' className='logo' alt='logo' />
                <h1 className='name'>travelerz</h1>
            </div>
            <div className='menu'>
                <div className='menuLi'><Link to="/">Home</Link></div>
                <div className='menuLi'><Link to='/destination'>Destination</Link></div>
                <div className='menuLi'><Link to='/unexplored'>Unexplored</Link></div>
                <div className='menuLi'><Link to='/contact'>Contact</Link></div>
            </div>
            <div className='menuResponsive'>
                <div className='menuLi'><Link to="/"><HomeIcon /></Link></div>
                <div className='menuLi'><Link to='/destination'><MapIcon /></Link></div>
                <div className='menuLi'><Link to='/unexplored'><ExploreIcon /></Link></div>
                <div className='menuLi'><Link to='/contact'><EmojiPeopleIcon /></Link></div>
            </div>
        </div>
        <div className='bottomBtn'>
        <Link to="/"><ArrowCircleUpIcon className='btnHome' /></Link>
        </div>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/destination" element={<Destination />}/>
      <Route path="/unexplored" element={<Unexplored />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
