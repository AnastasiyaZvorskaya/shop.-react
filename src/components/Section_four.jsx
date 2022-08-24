import React from 'react';

import Image from "../components/Image"
import '../components/style.css';

const Section_four = () => {
    return (<div className='section_four'>
        <div className='section_two_text'>
            <h5 className='section_two_name'>See the best around here</h5>
            <p className='section_two_name_text'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className='section_four_cards'>
            <div className='section_four_card'>
                <p className='section_four_card_name'>Smart light bulb pack</p>
                <p className='section_four_card_text'>Latest and gratest</p>
                <button className='btn_section_four'>Explore</button>
                <Image src={require('../Image/watch.png')} />
            </div>
            <div className='section_four_card'>
                <p className='section_four_card_name'>Smart light bulb pack</p>
                <p className='section_four_card_text'>Best selling</p>
                <button className='btn_section_four'>Explore</button>
                <Image src={require('../Image/best.png')} />
            </div>
            <div className='section_four_card'>
                <p className='section_four_card_name'>Smart light bulb pack</p>
                <p className='section_four_card_text'>Every product</p>
                <button className='btn_section_four'>Explore</button>
                <Image src={require('../Image/every_product.png')} />
            </div>
        </div>




    </div>);
}


export default Section_four;