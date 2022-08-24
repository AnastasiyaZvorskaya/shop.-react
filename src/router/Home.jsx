import React from 'react';
import NavLinks from '../components/NavLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Image from "../components/Image"
import '../components/style.css';
import Section_two from '../components/Section_two';
import Section_three from '../components/Section_three';
import Section_four from '../components/Section_four';
import Section_five from '../components/Section_five';
import Section_six from '../components/Section_six';

const Home = () => {
  return <div>
  <NavLinks/>
  <Carousel slide={false} className="image_carousel">
      <Carousel.Item>
        <div className="img_carousel_home">
      <Image src={require('../Image/phone.png')} /></div>
      <p className='text_name_carousel'>The new phones are<br></br> here take a look.</p>
      <p className="text_carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est<br></br> dui, aliquam, tempor. Faucibus morbi turpis.</p> 
      <button className='btn_carousel'>Explore</button>
      </Carousel.Item>
      <Carousel.Item>
      <div className="img_carousel_home">
      <Image src={require('../Image/phone.png')} /></div>
      <p className='text_name_carousel'>The new phones are<br></br> here take a look.</p>
      <p className="text_carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br></br> dui, aliquam, tempor. Faucibus morbi turpis.</p> 
      <button className='btn_carousel'>Explore</button>
      </Carousel.Item>
       <Carousel.Item>
      <div className="img_carousel_home">
      <Image src={require('../Image/phone.png')} /></div>
      <p className='text_name_carousel'>The new phones are<br></br> here take a look.</p>
      <p className="text_carousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br></br> dui, aliquam, tempor. Faucibus morbi turpis.</p> 
      <button className='btn_carousel'>Explore</button>
      </Carousel.Item>
    </Carousel> 
    <Section_two/>
    <Section_three/>
    <Section_four/>
    <Section_five/>
    <Section_six/>
  </div>;
}


export default Home;