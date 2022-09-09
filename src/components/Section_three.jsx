import React from 'react';

import Image from "../components/Image"
import '../components/style.css';


const Section_three = () => {
    return (<div className='section_three'>
        <div className='section_two_text'>
            <h5 className='section_two_name'>Save on our most selled items.</h5>
            <p className='section_two_name_text'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className='section_three_cards section'>
        <div className='section_three_card_one'>
                <Image src={require('../Image/laptop_section_three.png')} />
                <p className='section_three_macbook'>MacBook Pro 13</p>
                <p className='section_three_text'>Neque porro quisquam est qui dolorem <br></br> ipsum quia dolor sit amet</p>
                <p className='section_three_price'>$ 1,200.00 USD</p>
            </div>
            <div className='section_three_card_one'>
                <div className="img_section_three">
                    <Image src={require('../Image/time_section_tree.png')} /></div>
                <p className='section_three_macbook'>Smart Galaxy Watch 3</p>
                <p className='section_three_text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                <p className='section_three_price'>$ 199.00 USD</p>
            </div>
            <div className='section_three_card_one'>
                <Image src={require('../Image/laptop_three.png')} />
                <p className='section_three_macbook'>MacBook Air M1</p>
                <p className='section_three_text'>Neque porro quisquam est qui dolorem<br></br> ipsum quia dolor sit amet, consectetur,<br></br> adipisci velit...</p>
                <p className='section_three_price'>$ 1,009.00 USD</p>
            </div>
            <div className='section_three_card_one'>
                <Image src={require('../Image/tablet_section_three.png')} />
                <p className='section_three_macbook'>iPad</p>
                <p className='section_three_text'>Neque porro quisquam est qui dolorem<br></br> ipsum quia dolor sit amet, consectetur,<br></br> adipisci velit...</p>
                <p className='section_three_price'>$ 610.00 USD</p>
            </div>
        </div>



    </div>);
}


export default Section_three;