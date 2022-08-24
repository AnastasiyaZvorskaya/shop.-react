import React from 'react';

import Image from "../components/Image"
import '../components/style.css';

const Footer = () => {
  return (<div className='footer'>
    <div className='footer_grid'>
      <div>
        <Image src={require('../Image/logo.png')} />
        <p className='footer_text'>Sign up for texts to be notified about <br></br>our best offers on the perfect gifts.</p>
      </div>
      <div className='footer_column'>
        <h5 className='footer_text_name'>All products</h5>
        <a className='footer_text_column' href='#'>Phones</a>
        <a href='#' className='footer_text_column'>Watch</a>
        <a href='#' className='footer_text_column'>Tablet</a>
        <a href='#' className='footer_text_column'>Laptops</a>
      </div>
      <div className='footer_column'>
        <h5 className='footer_text_name'>Company</h5>
        <a href='#' className='footer_text_column'>About</a>
        <a href='#' className='footer_text_column'>Support</a>
      </div>
      <div className='footer_column'>
        <h5 className='footer_text_name'>Support</h5>
        <a href='#' className='footer_text_column'>Style Guide</a>
        <a href='#' className='footer_text_column'>Licensing</a>
        <a href='#' className='footer_text_column'>Change Log</a>
        <a href='#' className='footer_text_column'>Contact</a>
      </div>
      <div className='footer_column'>
        <h5 className='footer_text_name'>Follow Us</h5>
        <a href='https://www.instagram.com/' className='footer_text_column'>Instagram</a>
        <a href='https://uk-ua.facebook.com/' className='footer_text_column'>Facebook</a>
        <a href='https://www.linkedin.com/' className='footer_text_column'>LinkedIn</a>
        <a href='https://www.youtube.com/' className='footer_text_column'>Youtube</a>
      </div>
    </div>
    <hr className='line_footer'></hr>
    <div className='footer_made_by'>
      <p>Made By:</p>
      <p>Powered by:</p>
    </div>
  </div>);
}


export default Footer;