import React from 'react';
import Slider from 'infinite-react-carousel/lib/carousel/slider';
import './Slide.scss';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className='slide'>
        <div className='container'>
          <Slider arrowsScroll={arrowsScroll} slidesToShow={slidesToShow}>
            {children}
          </Slider>
        </div>
    </div>
  )
}

export default Slide