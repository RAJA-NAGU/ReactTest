import React from 'react'
import user from './assets/user.jpg'
import './index.css'
import { useState,useRef, useEffect } from "react";

function profile() {
    const [showMenu, setShowmenu] = useState(false)
    const profileRef = useRef(null)

    function toggleMenu(){
      setShowmenu(prev => !prev)
    }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setShowmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className='profile-container' onClick={toggleMenu} ref={profileRef}>
        <a className='profile'><img src={user} alt="user-image" className='user-icon'/></a>
        <ul className={`profile-lists ${showMenu ? "show":''}`}>
            <li className='profile-list'>
                <a className='profile-link'>Hello, Welcome</a>
            </li>
            <li className='profile-list'>
                <a className='profile-link'>Logout</a>
            </li>            
        </ul>
    </div>
  )
}

export default profile