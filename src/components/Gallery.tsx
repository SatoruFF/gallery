import React from 'react'

import '../style/gallery.scss'

import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import six from '../assets/6.jpg';
import seven from '../assets/7.jpg';
import eight from '../assets/8.jpg';
import nine from '../assets/9.jpg';

const Gallery = () => {
    return (
        <div className="gallery animate__animated animate__fadeInUp">
        <img src={one} alt="one" />
        <img src={two} alt="two" />
        <img src={three} alt="three" />
        <img src={four} alt="four" />
        <img src={five} alt="five" />
        <img src={six} alt="" />
        {/* <img src={seven} alt="" /> */}
        <img src={eight} alt="" />
        <img src={nine} alt="" />
      </div>
    );
}

export default Gallery;