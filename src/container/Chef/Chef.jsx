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
  <p className="p__opensansx">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis id expedita, reprehenderit, molestiae laborum veniam sapiente, eius ea voluptatum asperiores ad eaque. Libero, aspernatur laudantium.</p>
</div>
{/* <p className='p__opensansx'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, deleniti!</p>
 */}  
 </div>
 <div className="chef-sign">
  <p>Martin Neil</p>
  <p className='p__opensansx'>Chef & Founder</p>
  <img src={images.sign}></img>

 </div>
  </div>
   </div>
);

export default Chef;
