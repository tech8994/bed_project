import React from 'react';
import "./scss/index.scss";
import {product_img1, btm_bnr3} from "../../../assest/index";
import {BiHeart} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {FiEye} from "react-icons/fi";
import Slider from "react-slick";
import { Btn } from '../../../components';

export const SpecialProduct = () => {



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
    <div className='specialProduct_Section'>
    <div className='nested_specialProduct'>
     <div className='heading_specialProduct'>
         <h1>Special Products</h1>
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

   {/* banner */}
   <div className='banner'>
    <img src={btm_bnr3} alt="btm_bnr3" />
    <div className='content_banner'>
    <p>Lorem ipsum dolor sit amet.</p>
           <h1>Bedding Bundles</h1>
            <Btn value={"Shop Now"}/>
    </div>
   </div>

    </div>
 </div>
  )
}
