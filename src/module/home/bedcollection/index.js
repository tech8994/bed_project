import React from 'react';
import "./scss/index.scss";
import {product_img1} from "../../../assest/index";
import {BiHeart} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {FiEye} from "react-icons/fi";
import Slider from "react-slick";



export const BedCollection = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };









  return (
    <div className='bedCollection_Section'>
       <div className='nested_bedCollection'>
        <div className='heading_bedCollection'>
            <h1>Bedding Collections</h1>
            <div className='filter_links'>
              <ul>
                <li><a href="#/">BED SHEETS</a></li>
                <li><a href="#/">HAMPTON</a></li>
                <li><a href="#/">BOLSTER</a></li>
              </ul>
            </div>
        </div>

           {/* list of cards */}
           <div className='Cards_Section'>
            {/* card */}


            <Slider {...settings}>
      




<div className='child_card'>
                <div className='img'>
                  <img src={product_img1} alt="product_img1" />
                  <div className='img_icons'>
                    <div className='icon'>
                     <BiHeart/>   
                     <AiOutlineShoppingCart/>   
                     </div>

                     <div className='icon'>
                     <HiOutlineShare/>   
                     <FiEye/>   
                     </div>

                  </div>
                </div>
                <div className='product_content'>
                 <p>Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")</p>
                <p>$270</p>
                </div>
              </div>

              <div className='child_card'>
                <div className='img'>
                  <img src={product_img1} alt="product_img1" />
                  <div className='img_icons'>
                  <div className='icon'>
                     <BiHeart/>   
                     <AiOutlineShoppingCart/>   
                     </div>

                     <div className='icon'>
                     <HiOutlineShare/>   
                     <FiEye/>   
                     </div>
                 </div>
                </div>
                <div className='product_content'>
                 <p>Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")</p>
                <p>$270</p>
                </div>
              </div>










              <div className='child_card'>
                <div className='img'>
                  <img src={product_img1} alt="product_img1" />
                  <div className='img_icons'>
                  <div className='icon'>
                     <BiHeart/>   
                     <AiOutlineShoppingCart/>   
                     </div>

                     <div className='icon'>
                     <HiOutlineShare/>   
                     <FiEye/>   
                     </div>
                </div>
                </div>
                <div className='product_content'>
                 <p>Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")</p>
                <p>$270</p>
                </div>
              </div>




              <div className='child_card'>
                <div className='img'>
                  <img src={product_img1} alt="product_img1" />
                     <div className='img_icons'>
                     <div className='icon'>
                     <BiHeart/>   
                     <AiOutlineShoppingCart/>   
                     </div>

                     <div className='icon'>
                     <HiOutlineShare/>   
                     <FiEye/>   
                     </div>
                     </div>
                </div>
                <div className='product_content'>
                 <p>Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")</p>
                <p>$270</p>
                </div>
              </div>




              <div className='child_card'>
                <div className='img'>
                  <img src={product_img1} alt="product_img1" />
                  <div className='img_icons'>
                  <div className='icon'>
                     <BiHeart/>   
                     <AiOutlineShoppingCart/>   
                     </div>

                     <div className='icon'>
                     <HiOutlineShare/>   
                     <FiEye/>   
                     </div>
               </div>
                </div>
                <div className='product_content'>
                 <p>Basic Sheet Set. - Greige, Full XL (20"x27"; 92"x106"; 54"x80"x16")</p>
                <p>$270</p>
                </div>
              </div>




        </Slider>




            










              
           </div>
       </div>
    </div>
  )
}
