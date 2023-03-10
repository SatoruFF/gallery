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

  const images = [one, two, three, four, five, six, eight, nine]

    return (
      <div className="gallery animate__animated animate__fadeInUp">
        {images.map(image => (
          <img src={image} alt="Image" />
        ))}
      </div>
    );
}

export default Gallery;