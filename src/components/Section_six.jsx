import React from 'react';

import Image from "../components/Image"
import '../components/style.css';

const Section_six = () => {
    return (<div className='section_six'>
        <p className='section_six_text'>Looking for anything else?</p>
        <form action="" method="get">
            <input className="search" name="search" placeholder="Search keyword" type="search" />
        </form>
        <div className='section_six_all_btn'>
            <button className='section_six_btn'>iPhone</button>
            <button className='section_six_btn'>Charger</button>
            <button className='section_six_btn'>Gift</button>
            <button className='section_six_btn'>Google Pixel 3</button>
            <button className='section_six_btn'>Keyboard</button>
            <button className='section_six_btn'>13 Pro Max</button>
            <button className='section_six_btn'>iPhone 12</button>
            <button className='section_six_btn'>Laptop</button>
            <button className='section_six_btn'>Mobile</button>
        </div>
        <div className='section_six_registration'>
            <h5 className='section_six_text'>Never miss a thing</h5>
            <p className='section_six_sign_up'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
            <div className='section_six_sign_up_img'>
            <Image src={require('../Image/sign_up.png')} /></div>
            <form action="" method="get">
            <input className="section_six_email" name="search" placeholder="Your email" type="search" />
            <button class="section_six_button" type="submit">Sign up</button>
        </form>
        </div>
    </div>);
}


export default Section_six;