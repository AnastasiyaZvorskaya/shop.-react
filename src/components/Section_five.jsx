import React from 'react';

import Image from "../components/Image"
import '../components/style.css';

const Section_five = () => {
    return (<div className='section_five'>
        <div className='section_two_text'>
            <h5 class="section_two_name">Ideas have a place here</h5>
            <p className='section_two_name_text'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className="section_five_img" >
            <Image src={require('../Image/idea.png')} />
            <div className='section_five_text'>
                <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
                <p>Road Design Handbook For The International Road...</p>
                <p>The Best Kept Secrets About Creative People</p>
                <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
            </div>
        </div>
        <div className='section_five_see_all'>
        <a  className='section_five_see_all' href='#'>See All</a>
        <Image src={require('../Image/arrow.png')} /></div>
    </div>);
}


export default Section_five;