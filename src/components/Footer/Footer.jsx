import React from 'react';
import Image from "../../components/Image"
import '../../components/style.css';
import Footer_all_product from './Footer_all_product';
import Footer_company from './Footer_company';
import Footer_follow from './Footer_follow';
import Footer_support from './Footer_support';

const Footer = () => {
  return (<div className='footer'>
    <div className='footer_grid'>
      <div>
        <Image src={require('../../Image/logo.png')} />
        <p className='footer_text'>Sign up for texts to 
        be notified about <br></br>our best offers on the perfect 
        gifts.</p>
      </div>
      <Footer_all_product />
      <Footer_company />
      <Footer_support />
      <Footer_follow />
    </div>
    <hr className='line_footer'></hr>
    <div className='footer_made_by'>
      <p>Made By:</p>
      <p>Powered by:</p>
    </div>
  </div>);
}


export default Footer;