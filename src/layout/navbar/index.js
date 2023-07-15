import React from 'react';
import "./scss/index.scss";
import {MdEmail} from "react-icons/md";
import {FaSearch} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
import {HiOutlineShoppingBag} from "react-icons/hi";
import { Badge } from '@mui/material';
import {HiOutlineUser} from "react-icons/hi"
import { Btn, Input } from '../../components';






export const Navbar = () => {
  return (
    <div className='navbar_section'>
     <div className='nested_navabr_section'>
        <div className='email_section'>
            <a href="mailto:info@example.com">
           <MdEmail/> 
           info@example.com
           </a>
        </div>
        <div className='Header'>
       <div className='header_section'>
          <div className='logo'>
               <h1>LOGO</h1>
           </div>
           <div className='Search_box'>
           <Input placeholder={"search"}/>
            <Btn icons={FaSearch} />
           </div>
           <div className='icons'>
               <FaRegHeart/>
               {/* <Badge badgeContent={2}  color="error"> */}
               <HiOutlineShoppingBag/>
               {/* </Badge> */}
               <HiOutlineUser/>
           </div>
       </div>
       </div>
       {/* Links */}
       <div className='links_header'>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/">New Arrivals</a></li>
            <li><a href="#/">Build Your Bed</a></li>
            <li><a href="#/">Bedding Tabletops & Kitchen</a></li>
            <li><a href="#/">Curtain</a></li>
            <li><a href="#/">Bath</a></li>
            <li><a href="#/">Fabric</a></li>
            <li><a href="#/">Contact Us</a></li>
          </ul>
       </div>
     </div>
    </div>
  )
}
