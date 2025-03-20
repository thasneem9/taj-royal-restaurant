import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

  <div className='app__wrapper_img app__wrapper_img-reverse'>
  <img src={images.chef}></img>
  </div> 
  <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word"/>
    <h1 className="headtext__cormorant">What we beleive in</h1>
  <div className='chef-content'>

<div className='chef-content_quote'>
  <img src={images.quote}></img>
  <p className="p__opensansx">dining is more than just a meal. it's an experience that brings people together. Our passion lies in crafting delicious food and creating a welcoming atmosphere where every guest feels at home. At the heart of what we do is a commitment to quality, authenticity, and a love for sharing the joy of food with our community.</p>
</div>
{/* <p className='p__opensansx'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, deleniti!</p>
 */}  
 </div>
 <div className="chef-sign">
  <p>Rahul Sharma</p>
  <p className='p__opensansx'>Chef & Founder</p>
  <img src={images.sign}></img>

 </div>
  </div>
   </div>
);

export default Chef;
