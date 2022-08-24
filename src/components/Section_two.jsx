import React from 'react';

import Image from "../components/Image"
import '../components/style.css';

const Section_two = () => {
    return (<div className='section_two'>
        <div className='section_two_text'>
            <h5 className='section_two_name'>Shop our latest offers and categories</h5>
            <p className='section_two_name_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, <br></br>tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>;
        <div className="section_wrapper">
            <div className='grid_item_1'>
                <div className="grid_item_1_img" >
                    <Image src={require('../Image/laptop.png')} />
                </div>
                <p className='grid_item_1_laptop'>Laptops</p>
                <p className='grid_item_1_text'>True Laptop<br></br> Solution</p></div>
            <div className='grid_item_2'>
                <Image src={require('../Image/phone2.png')} />
                <div>
                    <p className='grid_item_2_phone'>Phones</p>
                    <p className='grid_item_2_text'>Your day to day <br></br>life</p>
                </div>
            </div>
            <div className='grid_item_3'>
                <p className="grid_item_3_tablet">Tablet</p>
                <p className="grid_item_3_text">Empower your <br></br>work</p>
                <Image src={require('../Image/tablet.png')} /></div>
            <div className='grid_item_4'>
                <div className="grid_item_4_img" >
                    <Image src={require('../Image/time.png')} /></div>
                <div className='grid_item_4_text'><p className='grid_item_4_watch'>Watch</p>
                    <p className='grid_item_4_watch_text'>Not just stylisht</p></div>
            </div>
        </div>
    </div>);
}


export default Section_two;