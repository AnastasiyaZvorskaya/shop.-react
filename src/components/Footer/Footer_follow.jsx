import React from 'react';
import '../../components/style.css';
import { NavLink } from 'react-router-dom';



function Footer_follow() {
    let all_product = [
        { name: 'Instagram', to: 'https://www.instagram.com/' },
        { name: 'Facebook', to: 'https://uk-ua.facebook.com/' },
        { name: 'LinkedIn', to: 'https://www.linkedin.com/' },
        { name: 'Youtube', to: 'https://www.youtube.com/' },
    ]
    return (<div className='footer_column'>
        <h5 className='footer_text_name'>Support</h5>
        {all_product.map((link) => (
            <NavLink key={link.name} to={link.to} className='footer_text_column'>{link.name}</NavLink>
        )
        )}

    </div>)
}





export default Footer_follow;