import React from 'react';
import {images} from '../../constants'
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='header app__wrapper section__padding' id="home">
   
      <div className='app__wrapper_info'>
        <SubHeading title="Discover the bold taste"/>
        <h1 className='header-h1'>The Key to Royal Cuisine</h1>
        <p className="p__opensansx" style={{margin:'0.5rem'}}>Taj Royale offers a blend of traditional and modern Indian cuisine.<br></br> Each dish is a celebration of rich flavors, spices, and culinary artistry,<br></br> making every visit a memorable affair.</p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
      <img src={images.welcome}></img>
      </div>
 </div>
);

export default Header;
