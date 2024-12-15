import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi2";

import "./style.css"

function Navbar() {

  const navigate=useNavigate();

  const onClickWebsiteLogo=()=>{
    navigate(`/`)
  }

  return (
    <div className='nav-container'>
         <HiShoppingBag className='website-logo' color='white' size={30} onClick={onClickWebsiteLogo}/>
            <div className='nav-links-container'>
                <Link to="/" className='link-item'>Home</Link>
                <Link to="/cart" className='link-item'>Cart</Link>
                <Link className='link-item'>About us</Link>
                <Link className='link-item'>Contact</Link>
                <Link className='link-item'>Profile</Link>
                <Link className='link-item'>Login</Link>
            </div>
    </div>
  )
}

export default Navbar