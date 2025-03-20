import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const date= new Date().getFullYear();
  return(
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensansx">9 MG Road, Bengaluru, Karnataka 560001, India</p>
        <p className="p__opensansx">+91 80 1234 5678</p>
        <p className="p__opensansx">+91 80 9876 5432</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.tajroyal} alt="footer_logo" />
        <p className="p__opensans">&quot;Discover the joy of community through the flavors we serve&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensansx">Monday-Friday:</p>
        <p className="p__opensansx">08:00 am - 12:00 am</p>
        <p className="p__opensansx">Saturday-Sunday:</p>
        <p className="p__opensansx">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensansx">{date} Taj Royal. All Rights reserved.</p>
    </div>

  </div>
)};

export default Footer;