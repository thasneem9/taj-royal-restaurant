import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="aboutus app__bg flex__center secton__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.TR} className='tr-image'></img>
    </div>

    <div className="aboutus-content flex__center">
      <div className="aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} className="spoon__img"></img>
        <p className="p__opensansx">Lorem ipsum dolor sit amet consectetur adipisicing <br></br>elit Architecto quidem, alias maxime vero fugit consequatur.</p>
        <button type="button"  className="custom__button">Know More</button>
      
      </div>
      <div className="aboutus-content_knife flex__center">
        <img src={images.knife}></img>
      </div>

      <div className="aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} className="spoon__img"></img>
        <p className="p__opensansx">Lorem ipsum dolor sit amet consectetur adipisicing <br></br> elit Architecto quidem, alias maxime vero fugit consequatur.</p>
        <button type="button"  className="custom__button">Know More</button>
      
      </div>
    </div>

  </div>
);

export default AboutUs;
