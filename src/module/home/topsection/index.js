import React from 'react'
import "./scss/index.scss";
import Slider from "react-slick";
import { Btn } from '../../../components';
import {slideshow_1, slideshow_2, slideshow_3} from "../../../assest"


export const TopSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='top_section'>
        <Slider {...settings} className="nested_top_section">
          <div className='item'>
            {/* <h3>1</h3> */}
            <img src={slideshow_1} alt="slideshow_1" />
        <div className='item_content'>
           <h1>Lorem Ipsum Dolor</h1>
           <p>Lorem Ipsum Dolor</p>
           <Btn value="View Collection"/>
        </div>
          </div>
          <div className='item'>
            {/* <h3>2</h3> */}
            <img src={slideshow_2} alt="slideshow_2" />
            <div className='item_content'>
           <h1>Lorem Ipsum Dolor</h1>
           <p>Lorem Ipsum Dolor</p>
           <Btn value="View Collection"/>
        </div>
          </div>
          <div className='item'>
            {/* <h3>3</h3> */}
            <img src={slideshow_3} alt="slideshow_3" />
            <div className='item_content'>
           <h1>Lorem Ipsum Dolor</h1>
           <p>Lorem Ipsum Dolor</p>
           <Btn value="View Collection"/>
        </div>
          </div>
        </Slider>
        </div>
  )
}
