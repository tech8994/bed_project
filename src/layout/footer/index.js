import React from 'react';
import "./scss/index.scss";
import {ImFacebook, ImTwitter} from "react-icons/im";
import {IoLogoGoogleplus} from "react-icons/io";
import {BsTelegram} from "react-icons/bs";
import {MdLocationPin} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md"


export const Footer = () => {
  return (
    <>
    <div className='footer-section'>
    <div className='nested_footeSection'>
      <div className='content_footer'>
        <div className='child'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='followus'>Follow us</p>
            <ul className='ul_links'>
                <li><a href="#/"><ImTwitter/></a></li>
                <li><a href="#/"><ImFacebook/></a></li>
                <li><a href="#/"><IoLogoGoogleplus/></a></li>
                <li><a href="#/"><BsTelegram/></a></li>
            </ul>
        </div>
        <div className='child'>
           <p>Information</p> 
           <ul className='link'>
            <li><a href="#/">Privacy Policy</a></li>
            <li><a href="#/">Retrun Policy</a></li>
            <li><a href="#/">Terms & Conditions</a></li>

           </ul>
           
        </div>
        <div className='child'>
              <p>Who We Are</p>
              <ul className='link'>
            <li><a href="#/">Home</a></li>
            <li><a href="#/">New Arrivals</a></li>
            <li><a href="#/">Build Your Bed</a></li>
            <li><a href="#/">Bedding Tabletops & Kitchen</a></li>
            <li><a href="#/">Curtains</a></li>
            <li><a href="#/">Bath</a></li>
            <li><a href="#/">Fabric</a></li>
            <li><a href="#/">Contact Us</a></li>
           </ul>
        </div>
        <div className='child'>
               <p>Contact us</p>
            <ul className='link'>
           <li>
           <MdLocationPin/>  Lorem Ipsum is simply dummy
           </li>
           <li>
            <a href="tel:+000 000 000 00">
           <AiFillPhone/>  
           +000 000 000 00
           </a>
           </li>
           <li>
            <a href="mailto:info@example.com">
           <MdEmail />  
           info@example.com</a>
           </li>
           </ul>
        </div>
      </div>
    </div>
    <div className='copyright'>
     <p>Copyright © 2023, Livin Linen</p>
    </div>
    </div>
    </>
  )
}
