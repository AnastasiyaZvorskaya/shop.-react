import React from 'react';
import '../../components/style.css';
import { NavLink } from 'react-router-dom';



function Footer_all_product() {
    let all_product = [
        { name: 'Phones', to: '#' },
        { name: 'Watch', to: '#' },
        { name: 'Tablet', to: '#' },
        { name: 'Laptops', to: '#' },
    ]
    return (<div className='footer_column'>
        <h5 className='footer_text_name'>All products</h5>
        {all_product.map((link) => (
            <NavLink key={link.name} to={link.to} className='footer_text_column'>{link.name}</NavLink>
        )
        )}

    </div>)
}





export default Footer_all_product;