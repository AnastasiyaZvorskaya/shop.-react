import React from 'react';
import '../../components/style.css';
import { NavLink } from 'react-router-dom';



function Footer_support() {
    let all_product = [
        { name: 'Style Guide', to: '#' },
        { name: 'Licensing', to: '#' },
        { name: 'Change Log', to: '#' },
        { name: 'Contact', to: '#' },
    ]
    return (<div className='footer_column'>
        <h5 className='footer_text_name'>Support</h5>
        {all_product.map((link) => (
            <NavLink key={link.name} to={link.to} className='footer_text_column'>{link.name}</NavLink>
        )
        )}

    </div>)
}





export default Footer_support;